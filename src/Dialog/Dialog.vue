<template>
  <Modal
    class="fx-dialog"
    :visible="visible"
    :showClose="false"
    :maskClosable="maskClosable"
    @visibleStateChange="onVisibleStateChange"
    @confirm="onConfirm"
    @cancel="onCancel"
    @update:visible="onUpdateVisible"
    ref="popup"
  >
    <div class="fx-dialog_header" v-if="title">
      {{ title }}
    </div>
    <div class="fx-dialog_content">
      <div class="fx-dialog_content-text" v-if="content">
        {{ content }}
      </div>
      <slot v-else></slot>
    </div>
    <div class="fx-dialog_footer fx-horizontal-hairline">
      <ButtonGroup class="fx-dialog_footer-inner" pattern="borderless">
        <FxButton
          v-if="showCancel"
          class="fx-dialog_button"
          type="default"
          @click="onCancelClick"
        >
          {{ cancelText }}
        </FxButton>
        <FxButton
          class="fx-dialog_button"
          type="primary"
          @click="onConfirmClick"
        >
          {{ confirmText }}
        </FxButton>
      </ButtonGroup>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FxButton from '@/Button'
import ButtonGroup from '@/ButtonGroup'
import Modal from '@/Modal'
import { usePopupExtend } from '@/popup/use-popup'
import { popupExtendEmits, popupExtendProps } from '@/popup/popup'

export default defineComponent({
  name: 'fx-dialog',
  components: { FxButton, ButtonGroup, Modal },
  props: {
    ...popupExtendProps,
    title: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: null
    }
  },
  emits: popupExtendEmits,
  setup(props, ctx) {
    const popup = usePopupExtend(ctx)

    function onConfirmClick() {
      popup.customConfirm({})
    }

    return {
      ...popup,
      onConfirmClick
    }
  }
})
</script>
