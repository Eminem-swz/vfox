<template>
  <fx-group title="基础用法">
    <fx-cell label="预览图片" isLink @click="show({})"></fx-cell>
    <fx-cell
      label="指定初始图片"
      isLink
      @click="
        show({ current: 'https://cdn.fox2.cn/vfox/swiper/different-2.jpg' })
      "
    ></fx-cell>
    <fx-cell
      label="展示关闭按钮"
      isLink
      @click="show({ showClose: true })"
    ></fx-cell>
  </fx-group>
  <fx-group title="事件监听">
    <fx-cell
      label="change/cancel"
      isLink
      @click="show({ changeEvent: true })"
    ></fx-cell>
    <fx-cell
      label="visible-state-change"
      isLink
      @click="show({ visibleEvent: true })"
    ></fx-cell>
  </fx-group>
  <fx-group title="API">
    <fx-cell label="showImagePreview" isLink @click="onCallApi"></fx-cell>
  </fx-group>
  <fx-image-preview
    v-model:visible="visible"
    :urls="imageUrls"
    v-model:current="current"
    :showClose="showClose"
    :imageHighRendering="false"
    @visibleStateChange="onVisibleStateChange"
    @cancel="onCancel"
    @change="onChange"
  ></fx-image-preview>
</template>

<script lang="ts">
import {
  ImagePreviewOnChange,
  PopupOnCancel,
  PopupOnVisibleStateChange,
  showImagePreview,
  showToast
} from '@/index'
import { defineComponent, ref } from 'vue'

interface showArgs {
  showClose?: boolean
  current?: string
  changeEvent?: boolean
  visibleEvent?: boolean
}

export default defineComponent({
  name: 'ExpImagePreview',
  setup() {
    const visible = ref(false)
    const showClose = ref(false)
    const changeEvent = ref(false)
    const visibleEvent = ref(false)

    const current = ref('')

    const imageUrls = [
      'https://cdn.fox2.cn/vfox/swiper/different-1.jpg',
      'https://cdn.fox2.cn/vfox/swiper/different-2.jpg',
      'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'
    ]

    function onCallApi() {
      showImagePreview({
        urls: imageUrls,
        showClose: true,
        imageHighRendering: false,
        success: res => {
          console.log('success', res)
        }
      })
    }

    function show(res: showArgs) {
      showClose.value = res.showClose || false
      current.value = res.current || ''
      changeEvent.value = res.changeEvent || false
      visibleEvent.value = res.visibleEvent || false
      visible.value = true
    }

    const onVisibleStateChange: PopupOnVisibleStateChange = res => {
      if (visibleEvent.value) {
        console.log('visible-state-change', res)
        showToast(`${res.state} 事件触发`)
      }
      if (res.state === 'hidden') {
        showClose.value = false
        current.value = ''
        changeEvent.value = false
        visibleEvent.value = false
      }
    }

    const onChange: ImagePreviewOnChange = res => {
      if (changeEvent.value) {
        console.log('change', res)
        showToast(`切换到第 ${res.activeIndex + 1} 张`)
      }
    }

    const onCancel: PopupOnCancel = res => {
      if (changeEvent.value) {
        console.log('cancel', res)
        showToast(`关闭`)
      }
    }

    return {
      visible,
      showClose,

      imageUrls,
      current,

      onCallApi,
      show,
      onVisibleStateChange,
      onChange,
      onCancel
    }
  }
})
</script>
