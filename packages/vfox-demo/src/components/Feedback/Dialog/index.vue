<template>
  <fx-group title="基础用法">
    <fx-cell
      label="默认"
      isLink
      @click="
        show({
          title: '标题',
          content: '提示内容提示内容提示内容提示内容提示内容提示内容'
        })
      "
    ></fx-cell>
    <fx-cell
      label="不带标题"
      isLink
      @click="
        show({
          content: '提示内容提示内容提示内容提示内容提示内容提示内容'
        })
      "
    ></fx-cell>
    <fx-cell
      label="不显示取消按钮"
      isLink
      @click="
        show({
          title: '标题',
          content: '提示内容提示内容提示内容提示内容提示内容提示内容',
          showCancel: false
        })
      "
    ></fx-cell>
    <fx-cell
      label="自定义按钮文案"
      isLink
      @click="
        show({
          title: '惊喜',
          content: '这有一份关爱保险待你查收',
          cancelText: '拒绝',
          confirmText: '接受'
        })
      "
    ></fx-cell>
  </fx-group>
  <fx-group title="事件监听">
    <fx-cell
      label="confirm/cancel"
      isLink
      @click="
        show(
          {
            title: '标题',
            content: '提示内容提示内容提示内容提示内容提示内容提示内容'
          },
          true
        )
      "
    ></fx-cell>
    <fx-cell
      label="visible-state-change"
      isLink
      @click="
        show(
          {
            title: '标题',
            content: '提示内容提示内容提示内容提示内容提示内容提示内容'
          },
          false,
          true
        )
      "
    ></fx-cell>
  </fx-group>
  <fx-group title="API">
    <fx-cell label="showDialog" isLink @click="onCallApi()"></fx-cell>
  </fx-group>
  <fx-dialog
    v-model:visible="visible"
    v-bind="dialogArgs"
    @confirm="onConfirm"
    @cancel="onCancel"
    @visibleStateChange="onVisibleStateChange"
  >
  </fx-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import {
  showToast,
  showDialog,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from '@/index'

interface DialogArgs {
  title?: string
  content?: string
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
}

export default defineComponent({
  name: 'ExpDialog',
  setup(props, ctx) {
    const visible = ref(false)
    let callbackEvent = false
    let visibleEvent = false

    const dialogArgs = reactive<DialogArgs>({
      title: '',
      content: '',
      cancelText: '',
      confirmText: '',
      showCancel: false
    })

    function show(obj: DialogArgs, callbackE?: boolean, visibleE?: boolean) {
      obj = Object.assign(
        {
          title: '',
          content: '',
          showCancel: true,
          cancelText: '取消',
          confirmText: '确定'
        },
        obj
      )

      for (let k in obj) {
        dialogArgs[k as 'title'] = obj[k as 'title']
      }

      callbackEvent = !!callbackE
      visibleEvent = !!visibleE

      visible.value = true
    }

    function onCallApi() {
      showDialog({
        title: '标题',
        content: '提示内容提示内容提示内容提示内容提示内容提示内容',
        maskClosable: true,
        success: (res: any) => {
          console.log('success', res)
          showToast(res.confirm ? 'confirm = true' : 'cancel = true')
        }
      })
    }

    const onConfirm = (res: any) => {
      console.log('confirm', res)
      callbackEvent && showToast('点击确定按钮')
    }

    const onCancel: PopupOnCancel = res => {
      console.log('cancel', res)
      callbackEvent && showToast('点击取消按钮')
    }

    const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
      if (visibleEvent) {
        console.log('visible-state-change', state)
        showToast(`${state} 事件触发`)
      }
    }

    return {
      visible,
      dialogArgs,
      show,
      onCallApi,
      onConfirm,
      onCancel,
      onVisibleStateChange
    }
  }
})
</script>
