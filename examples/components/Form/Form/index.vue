<template>
  <fx-group title="基础用法">
    <FormProvider :form="form2">
      <Field
        name="nickname"
        title="昵称"
        required
        :component="[Input, { placeholder: '请输入昵称' }]"
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
            options: [
              { label: '男', value: 1 },
              { label: '女', value: 2 }
            ]
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
          <div>
            {{ JSON.stringify(form.values, null, 2) }}
          </div>
          <fx-button
            type="primary"
            @click="
              () => {
                form.submit(log)
              }
            "
            >提交</fx-button
          >
        </template>
      </FormConsumer>
    </FormProvider>
  </fx-group>
  <!-- 
    <fx-group title="基础用法">
      <fx-form @validate-submit="onSubmit" @reset="onReset" :rules="rules">

        <fx-form-item name="avatar" label="头像" required>
          <fx-image-uploader
            v-model="form.avatar"
            @reset="onReset"
            :uploadReady="onUpload"
            :columnNumber="1"
            :maxCount="1"
          />
        </fx-form-item>

        
        <div class="form-btns">
          <fx-button form-type="reset">重置</fx-button>
          <fx-button type="primary" form-type="submit">提交</fx-button>
        </div>
      </fx-form>
    </fx-group> -->
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
import { FormItem } from '@/Form'
import {
  createForm,
  registerValidateLocale,
  setValidateLanguage
} from '@formily/core'
import { FormProvider, Field, FormConsumer } from '@formily/vue'

setValidateLanguage('zh-CN')

registerValidateLocale({
  'zh-CN': {
    required: '定制的必填校验文案'
  }
})

export default {
  name: 'ExpForm',
  components: { FormProvider, Field, FormConsumer },
  data() {
    return {
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
      form2: createForm({ validateFirst: true }),

      ageVisible: false,
      regionOptions,
      rules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        avatar: [{ required: true, type: 'array', message: '请选择头像' }],
        gender: [{ required: true, message: '请选择性别' }],
        age: [{ required: true, message: '请选择年龄' }],
        region: [{ required: true, message: '请选择地区' }],
        character: [{ required: true, type: 'array', message: '请选择性格' }],
        season: [{ required: true, message: '请选择季节' }],
        birthday: [{ required: true, message: '请选择生日' }],
        weight: [
          {
            min: 42.5,
            message: '太瘦的我们不要',
            type: 'number',
            trigger: 'change'
          },
          {
            max: 80,
            message: '太肥的我们不要',
            type: 'number',
            trigger: 'change'
          }
        ],
        happinessIndex: [
          {
            min: 0.5,
            message: '请选择幸福指数',
            type: 'number',
            trigger: 'change'
          },
          {
            min: 3,
            message: '你不幸福吗？',
            type: 'number',
            trigger: 'change'
          }
        ],
        agree: [
          {
            validator(rule, value, callback) {
              if (value === true) {
                callback()
              } else {
                callback(new Error('你必须认可该表单'))
              }
            }
          }
        ]
      },
      form: {
        nickname: '',
        avatar: [],
        gender: '',
        happinessIndex: 0,
        weight: 0,
        character: ['活泼'],
        season: [],
        region: ['北京市', '北京市', '东城区'],
        stepper: 0,
        birthday: [new Date()],
        agree: false
      },
      multiOptions,
      characters: ['活泼', '内向', '高冷'],
      formatString: false,
      birthdayFormatter(value, formatter) {
        console.log(value, formatter('YYYY-MM-DD'))
        return value[0] ? formatter('YYYY-MM-DD')[0] : ''
      }
    }
  },
  methods: {
    onSubmit(res) {
      console.log(res)
      showToast(res.valid ? '校验通过' : '校验失败')
    },
    onReset(res) {
      console.log(res)
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
    },
    log(...args) {
      console.log(...args)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.form-btns {
  padding: 12px 16px;
  display: flex;
  background-color: #fff;
}
</style>
