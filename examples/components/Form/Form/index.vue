<template>
  <fx-group title="基础">
    <fx-form>
      <fx-form-item label="昵称">
        <fx-input v-model="baseForm.nickname" placeholder="请输入昵称" />
      </fx-form-item>
      <fx-form-item label="性别">
        <fx-radio-group
          v-model="baseForm.gender"
          :options="genderOptions"
        ></fx-radio-group>
      </fx-form-item>
      <template #footer>
        <fx-button type="primary" @click="onBaseSubmit">提交</fx-button>
      </template>
    </fx-form>
  </fx-group>
  <fx-group title="Formily">
    <FormProvider :form="form">
      <Field
        name="nickname"
        title="昵称"
        required
        :component="[Input, { placeholder: '请输入昵称', showClear: true }]"
        :decorator="[FormItem]"
      />
      <Field
        name="avatar"
        title="头像"
        required
        :component="[
          ImageUploader,
          { uploadReady: onUpload, columnNumber: 1, maxCount: 1 }
        ]"
        :decorator="[FormItem]"
      />
      <Field
        name="gender"
        title="性别"
        required
        :component="[
          RadioGroup,
          {
            options: genderOptions
          }
        ]"
        :decorator="[FormItem]"
      />
      <Field
        name="weight"
        title="体重Kg"
        required
        :component="[Slider, { showValue: true, min: 35, max: 120 }]"
        :decorator="[FormItem]"
      />
      <Field
        name="season"
        title="季节"
        required
        :component="[
          Picker,
          { options: multiOptions, placeholder: '选择季节' }
        ]"
        :decorator="[FormItem]"
      />
      <Field
        name="birthday"
        title="生日"
        required
        :component="[Calendar, { placeholder: '选择生日' }]"
        :decorator="[FormItem]"
      />
      <Field
        name="character"
        title="性格"
        required
        :component="[CheckboxGroup, { options: characters }]"
        :decorator="[FormItem]"
      />
      <Field
        name="region"
        title="地区"
        required
        :component="[
          Cascader,
          {
            placeholder: '选择地区',
            fieldNames: { value: 'label' },
            options: regionOptions
          }
        ]"
        :decorator="[FormItem]"
      />
      <Field
        name="happinessIndex"
        title="幸福指数"
        required
        :component="[Rate, { allowHalf: true }]"
        :decorator="[FormItem]"
      />
      <Field
        name="stepper"
        title="步进器"
        required
        :component="[Stepper, { max: 10, step: 0.2, decimalLength: 1 }]"
        :decorator="[FormItem]"
      />
      <Field
        name="agree"
        title="认可"
        required
        :component="[Switch]"
        :decorator="[FormItem]"
      />
      <FormConsumer>
        <template #default="{ form }">
          <pre class="exp-form-json">{{
            JSON.stringify(form.values, null, 2)
          }}</pre>
          <fx-form-footer>
            <fx-button
              type="primary"
              @click="
                () => {
                  form.submit(onSubmit)
                }
              "
              >提交</fx-button
            >
          </fx-form-footer>
        </template>
      </FormConsumer>
    </FormProvider>
  </fx-group>
</template>

<script>
import { multiOptions, regionOptions } from '../Picker/data'
import { showToast } from '@/Toast'
import {
  Input,
  Picker,
  Calendar,
  Cascader,
  Switch,
  Rate,
  Slider,
  Range,
  Stepper,
  RadioGroup,
  CheckboxGroup,
  ImageUploader
} from '@/index'
import { createForm, setValidateLanguage } from '@formily/core'
import { FormProvider, Field, FormConsumer } from '@formily/vue'
import FormItem from './FormItem'
import { showDialog } from '@/Dialog'

setValidateLanguage('zh-CN')

export default {
  name: 'ExpForm',
  components: { FormProvider, Field, FormConsumer },
  data() {
    return {
      baseForm: {
        nickname: '',
        gender: ''
      },

      FormItem,
      Input,
      Picker,
      Calendar,
      Cascader,
      Switch,
      Rate,
      Slider,
      Range,
      Stepper,
      RadioGroup,
      CheckboxGroup,
      ImageUploader,
      form: createForm({ validateFirst: true }),

      genderOptions: [
        { label: '男', value: 1 },
        { label: '女', value: 2 }
      ],
      regionOptions,
      multiOptions,
      characters: ['活泼', '内向', '高冷']
    }
  },
  methods: {
    onBaseSubmit() {
      showDialog({
        showCancel: false,
        content: `nickname: ${this.baseForm.nickname}
        gender: ${this.baseForm.gender}
        `
      })
    },
    onSubmit(...args) {
      console.log(...args)
      showToast('校验通过')
    },
    onUpload(file, handlers) {
      console.log(file)
      this.getDataUrl(file).then(url => {
        handlers.success(url)
      })
    },
    getDataUrl(file) {
      return new Promise(resolve => {
        const fr = new FileReader()
        fr.onload = function (e) {
          resolve(e.target.result)
        }
        fr.readAsDataURL(file)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-form {
  &-json {
    margin: 0;
    padding: 8px 16px;
    background-color: $background-color;
  }
}
</style>
