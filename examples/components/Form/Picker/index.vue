<template>
  <div>
    <fx-notice-bar
      class="top-notice-bar"
      title="具体展示参数可以参考 PickerView"
    >
    </fx-notice-bar>
    <fx-group title="Picker">
      <fx-cell label="单列">
        <fx-picker :options="options" @change="onChange"></fx-picker>
      </fx-cell>
      <fx-cell label="多列">
        <fx-picker :options="multiOptions" @change="onChange"></fx-picker>
      </fx-cell>
      <fx-cell label="级联">
        <fx-picker :options="cascadeOptions" @change="onChange"></fx-picker>
      </fx-cell>
      <fx-cell label="地区">
        <fx-picker
          :options="regionOptions"
          :field-names="{ value: 'label' }"
          :format-string="true"
          v-model="regionValue"
          @change="onChange"
        />
      </fx-cell>
      <fx-cell label="禁用">
        <fx-picker
          :modelValue="disableValue"
          :options="multiOptions"
          disabled
        />
      </fx-cell>
    </fx-group>
    <fx-group title="PickerPopup">
      <fx-cell label="基础" isLink @click="visible = true">{{
        popupValue
      }}</fx-cell>
    </fx-group>
    <fx-group title="PickerPopup Event">
      <fx-cell
        label="change"
        isLink
        @click=";(changeEvent = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="confirm/cancel"
        isLink
        @click=";(clickEvent = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="visible-state-change"
        isLink
        @click=";(visibleEvent = true), (visible = true)"
      ></fx-cell>
    </fx-group>
    <fx-group title="API">
      <fx-cell label="showPicker" isLink @click="onCallApi"></fx-cell>
    </fx-group>
    <fx-picker-popup
      v-model:visible="visible"
      :title="title"
      :options="multiOptions"
      :format-string="true"
      v-model="popupValue"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="onCancel"
      @visibleStateChange="onVisibleStateChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { cascadeOptions, multiOptions, options, regionOptions } from './data'
import {
  showToast,
  showPicker,
  SelectorModelValue,
  PickerOnConfirm,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from '@/index'

export default defineComponent({
  name: 'ExpPicker',
  setup() {
    const regionValue = ref([])
    const disableValue = ref([2000, '春'])
    const popupValue = ref([2000, '夏'])
    const title = ref('Picker')
    const visible = ref(false)
    const clickEvent = ref(false)
    const changeEvent = ref(false)
    const visibleEvent = ref(false)

    const onVisibleStateChange: PopupOnVisibleStateChange = res => {
      if (visibleEvent.value) {
        console.log('visible-state-change', res)
        showToast(`${res.state} 事件触发`)
      }

      if (res.state === 'hidden') {
        clickEvent.value = false
        visibleEvent.value = false
        changeEvent.value = false
      }
    }

    function onCallApi() {
      showPicker({
        title: title.value,
        options: multiOptions
      }).then(res => {
        console.log('success', res)
        if (res.cancel) {
          showToast('取消了')
        } else {
          showToast(`选择了 ${res.detail.label}`)
        }
      })
    }

    const onConfirm: PickerOnConfirm = res => {
      if (clickEvent.value) {
        console.log('confirm', res)
        showToast(`点击确定按钮`)
      }
    }

    function onChange(res: SelectorModelValue) {
      if (changeEvent.value) {
        console.log('change', res)
        showToast(`值改为 ${res}`)
      }
    }

    const onCancel: PopupOnCancel = res => {
      if (clickEvent.value) {
        console.log('cancel', res)

        if (res.source === 'cancelClick') {
          showToast('点击了取消按钮')
        } else if (res.source === 'maskClick') {
          showToast('点击了蒙层')
        }
      }
    }

    return {
      regionValue,
      disableValue,
      popupValue,
      title,
      visible,
      clickEvent,
      changeEvent,
      visibleEvent,
      multiOptions,
      options,
      cascadeOptions,
      regionOptions,
      onConfirm,
      onCancel,
      onChange,
      onVisibleStateChange,
      onCallApi
    }
  }
})
</script>
