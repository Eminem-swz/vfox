<template>
  <teleport to="body">
    <div
      class="fx-notify fx-popup"
      :class="{ visible: visible2 }"
      :style="popupStyles"
      v-bind="$attrs"
      v-show="isShow"
    >
      <NoticeBar
        class="fx-notify_inner"
        :type="type"
        :leftIcon="icon"
        :title="title"
        :color="color"
        :mode="closable ? 'closable' : 'default'"
        @close-click="onClose"
      />
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue'
import type { PropType } from 'vue'
import { NoticeBar } from '../NoticeBar'
import { usePopup } from '../popup/use-popup'
import { popupEmits, popupProps } from '../popup/popup'
import { emitTypeValidator, iconValidator } from '../helpers/validator'
import type { StateType } from '../helpers/types'

export default defineComponent({
  name: 'fx-notify',
  components: { NoticeBar },
  provide() {
    return {
      fxNotifyExist: true
    }
  },
  props: {
    ...popupProps,
    closable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    icon: {
      type: [String, Object],
      validator: iconValidator
    },
    color: {
      type: String
    },
    // 展示时长(ms)，值为 0 时，notify 不会消失
    duration: {
      type: Number,
      default: 0
    },
    // 类型
    type: {
      type: String as PropType<StateType>
    }
  },
  emits: {
    ...popupEmits,
    'close-click': emitTypeValidator
  },
  setup(props, ctx) {
    const { emit } = ctx
    let durationTimer: number

    const popup = usePopup(props, ctx, {
      forbidScroll: false,
      afterCancel: removeAutoClose,
      afterShow: setAutoClose
    })

    function removeAutoClose() {
      clearTimeout(durationTimer)
    }

    function setAutoClose() {
      if (props.duration > 0) {
        durationTimer = window.setTimeout(() => {
          popup.customCancel('auto', true)
        }, props.duration)
      }
    }

    function onClose() {
      emit('close-click', {
        type: 'close-click'
      })
      popup.customCancel('activeClick', true)
    }

    onBeforeUnmount(removeAutoClose)

    return {
      ...popup,
      onClose
    }
  }
})
</script>
