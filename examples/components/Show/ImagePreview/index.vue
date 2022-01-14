<template>
  <div>
    <fx-group title="基础用法">
      <fx-cell label="预览图片" isLink @click="show"></fx-cell>
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
      @visible-state-change="onVisibleStateChange"
      @cancel="onCancel"
      @change="onChange"
    ></fx-image-preview>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PopupVisibleStateChangeArgs, PopupCancelArgs } from '@/index'
import { showToast } from '@/Toast'
import { showImagePreview } from '@/ImagePreview'
import type { ImagePreviewOnChange, FnArgs } from '@/index'

interface showArgs {
  showClose?: boolean
  current?: string
  changeEvent?: boolean
  visibleEvent?: boolean
}

export default defineComponent({
  name: 'ExpImagePreview',
  data() {
    return {
      visible: false,
      showClose: false,
      imageUrls: [
        'https://cdn.fox2.cn/vfox/swiper/different-1.jpg',
        'https://cdn.fox2.cn/vfox/swiper/different-2.jpg',
        'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'
      ],
      current: '',

      changeEvent: false,
      visibleEvent: false
    }
  },
  methods: {
    onCallApi() {
      showImagePreview({
        urls: this.imageUrls,
        showClose: true,
        imageHighRendering: false,
        success: res => {
          console.log('success', res)
        }
      })
    },
    show(res: showArgs) {
      this.showClose = res.showClose || false
      this.current = res.current || ''
      this.changeEvent = res.changeEvent || false
      this.visibleEvent = res.visibleEvent || false
      this.visible = true
    },
    onVisibleStateChange(res: PopupVisibleStateChangeArgs) {
      if (this.visibleEvent) {
        console.log('event', res)
        showToast(`${res.state} 事件触发`)
      }
      if (res.state === 'hidden') {
        this.showClose = false
        this.current = ''
        this.changeEvent = false
        this.visibleEvent = false
      }
    },
    onChange(res: FnArgs<ImagePreviewOnChange>[0]) {
      if (this.changeEvent) {
        console.log('event', res)
        showToast(`切换到第 ${res.activeIndex + 1} 张`)
      }
    },
    onCancel(res: PopupCancelArgs) {
      if (this.changeEvent) {
        console.log('cancel', res)
        showToast(`关闭`)
      }
    }
  }
})
</script>
