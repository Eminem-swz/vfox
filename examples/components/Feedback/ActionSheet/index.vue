<template>
  <div>
    <fx-group title="基础用法">
      <fx-cell label="默认" isLink @click="visible = true"></fx-cell>
      <fx-cell
        label="展示标题"
        isLink
        @click=";(title = '标题'), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="展示取消按钮"
        isLink
        @click=";(showCancel = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="设置取消按钮文案"
        isLink
        @click="
          ;(showCancel = true),
            (cancelText = '自定义取消按钮文案'),
            (visible = true)
        "
      ></fx-cell>
    </fx-group>
    <fx-group title="options 扩展">
      <fx-cell
        label="选项描述"
        isLink
        @click="
          ;(options = [
            {
              name: '选项1',
              description: '选项1的描述文案'
            },
            {
              name: '选项2'
            },
            {
              name: '选项3'
            }
          ]),
            (visible = true)
        "
      ></fx-cell>
      <fx-cell
        label="选项高亮"
        isLink
        @click="
          ;(options = [
            {
              name: '选项1',
              highlight: true
            },
            {
              name: '选项2'
            },
            {
              name: '选项3'
            }
          ]),
            (visible = true)
        "
      ></fx-cell>
    </fx-group>
    <fx-group title="事件监听">
      <fx-cell
        label="confirm/cancel"
        isLink
        @click=";(showCancel = true), (showEvent = true), (visible = true)"
      ></fx-cell>
      <fx-cell
        label="visible-state-change"
        isLink
        @click=";(visibleEvent = true), (visible = true)"
      ></fx-cell>
    </fx-group>
    <fx-group title="API">
      <fx-cell label="showActionSheet" isLink @click="onCallApi()"></fx-cell>
    </fx-group>
    <fx-action-sheet
      v-model:visible="visible"
      :title="title"
      :options="options"
      :show-cancel="showCancel"
      :cancel-text="cancelText"
      @confirm="onConfirm"
      @cancel="onCancel"
      @visible-state-change="onVisibleStateChange"
    ></fx-action-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type {
  ActionSheetOption,
  ActionSheetConfirmArgs,
  PopupCancelArgs,
  PopupVisibleStateChangeArgs
} from '@/types'
import { showToast } from '@/Toast'
import { showDialog } from '@/Dialog'
import { showActionSheet } from '@/ActionSheet'

const defaultOptions: ActionSheetOption[] = [
  {
    name: '选项1'
  },
  {
    name: '选项2'
  },
  {
    name: '选项3'
  }
]

export default defineComponent({
  name: 'ExpActionSheet',
  data() {
    return {
      visible: false,
      title: '',
      showCancel: false,
      cancelText: '取消',
      options: defaultOptions,
      options2: [
        {
          name: '选项1',
          description: '选项1的描述文案'
        },
        {
          name: '选项2'
        },
        {
          name: '选项3'
        }
      ] as ActionSheetOption[],

      showEvent: false,
      visibleEvent: false
    }
  },
  methods: {
    onVisibleStateChange(res: PopupVisibleStateChangeArgs) {
      if (this.visibleEvent) {
        console.log('event', res)
        showToast(`${res.state} 事件触发`)
      }

      if (res.state === 'hidden') {
        this.showCancel = false
        this.cancelText = '取消'
        this.options = defaultOptions
        this.title = ''
        this.visibleEvent = false
        this.showEvent = false
      }
    },
    onConfirm(res: ActionSheetConfirmArgs) {
      if (this.showEvent) {
        console.log('event', res)
        showDialog({
          title: '选择了',
          showCancel: false,
          content: `item.name: '${res.item.name}'\nindex: ${res.index}`
        })
      }
    },
    onCancel(res: PopupCancelArgs) {
      if (this.showEvent) {
        console.log('event', res)
        showToast('取消了')
      }
    },
    onCallApi() {
      showActionSheet({
        title: '标题',
        options: this.options,
        showCancel: true,
        success: res => {
          console.log('success', res)
          const { confirm, detail } = res

          if (confirm) {
            showDialog({
              title: '选择了',
              showCancel: false,
              content: `item.name: '${detail.item.name}'\nindex: ${detail.index}`
            })
          } else {
            showToast('取消了')
          }
        }
      })
    }
  }
})
</script>
