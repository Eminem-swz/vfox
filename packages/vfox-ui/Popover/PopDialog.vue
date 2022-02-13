<template>
  <teleport to="body">
    <div
      class="fx-popover fx-popup fx-pop-dialog"
      :class="{ visible: visible2, 'no--mask': !showMask }"
      :style="popupStyles"
      v-bind="$attrs"
      v-show="isShow"
    >
      <div class="fx-mask" @click="onMaskClick"></div>
      <div class="fx-popover_inner" ref="innerEl" :style="innerStyles">
        <i class="fx-popover_arrow" :style="arrowStyles"></i>
        <div class="fx-popover_content">
          <div class="fx-pop-dialog_body">
            <div class="fx-popover_text">{{ content }}</div>
          </div>
          <div class="fx-pop-dialog_footer fx-horizontal-hairline">
            <ButtonGroup
              class="fx-pop-dialog_footer-inner"
              pattern="borderless"
              size="middle"
            >
              <Button v-if="showCancel" type="default" @click="onCancelClick">
                {{ cancelText || locale.popDialogCancelText }}
              </Button>
              <Button type="primary" @click="onConfirmClick">
                {{ confirmText || locale.popDialogConfirmText }}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePopover } from '../Popover/use-popover'
import { popoverProps, popoverEmits } from '../Popover/popover'
import { Button, ButtonGroup } from '../Button'
import { locale } from '../Locale'

export default defineComponent({
  name: 'fx-pop-dialog',
  components: { Button, ButtonGroup },
  props: {
    ...popoverProps,
    content: {
      type: String,
      default: '',
      required: true
    },
    // 展示取消按钮
    showCancel: {
      type: Boolean,
      default: true
    },
    // 取消文本
    cancelText: {
      type: String
    },
    // 确认文本
    confirmText: {
      type: String
    }
  },
  emits: { ...popoverEmits },
  setup(props, ctx) {
    const popoverHook = usePopover(props, ctx)

    function onConfirmClick() {
      popoverHook.customConfirm({})
    }

    return {
      ...popoverHook,
      onConfirmClick,
      locale
    }
  }
})
</script>
