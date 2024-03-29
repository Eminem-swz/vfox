<template>
  <teleport to="body">
    <div
      class="fx-drawer fx-popup"
      :class="{ visible: visible2, 'no--mask': !showMask }"
      :style="popupStyles"
      v-bind="$attrs"
      v-show="isShow"
    >
      <div class="fx-mask" @click="onMaskClick"></div>
      <div
        class="fx-drawer_inner fx-horizontal-hairline"
        :class="[alignClassName, { 'has--header': hasHeader }]"
        :style="innerStyles"
      >
        <slot name="header">
          <NavBar
            v-if="hasHeader"
            class="fx-drawer_header"
            :title="title"
            :rightButtons="
              showClose ? [{ icon: 'CloseOutlined', text: 'close' }] : []
            "
            :icon-only="true"
            @rightButtonClick="onHeaderRightClick"
          >
          </NavBar>
        </slot>
        <div class="fx-drawer_body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed, toRef, watch } from 'vue'
import type { PropType } from 'vue'
import { NavBar } from '../NavBar'
import { usePopup } from '../popup/use-popup'
import { popupEmits, popupProps } from '../popup/popup'
import { useSafeAreaInsets } from '../hooks/use-safe-area-insets'
import { createEnumsValidator, getEnumsValue } from '../helpers/validator'
import { PLACEMENT_TYPES } from '../helpers/constants'
import type { PlacementType } from '../helpers/types'

export default defineComponent({
  name: 'fx-drawer',
  components: { NavBar },
  props: {
    ...popupProps,
    title: {
      type: String,
      default: null
    },
    placement: {
      type: String as PropType<PlacementType>,
      validator: createEnumsValidator(PLACEMENT_TYPES),
      default: getEnumsValue(PLACEMENT_TYPES)
    },
    showClose: {
      type: Boolean,
      default: false
    },
    // 是否开启安全区
    enableSafeAreaInsets: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: Boolean,
      default: true
    }
  },
  emits: { ...popupEmits },
  setup(props, ctx) {
    const popupOptions = {
      enableUseBlur: false
    }

    const popup = usePopup(props, ctx, popupOptions)
    const safeAreaInsets = useSafeAreaInsets(
      toRef(props, 'enableSafeAreaInsets')
    )

    const alignClassName = computed(
      () => 'placement--' + getEnumsValue(PLACEMENT_TYPES, props.placement)
    )

    const hasHeader = computed(
      () => props.title || props.showClose || ctx.slots.header
    )

    const innerStyles = computed(() => {
      const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)

      let left = safeAreaInsets.left
      let top = safeAreaInsets.top
      let right = safeAreaInsets.right
      let bottom = safeAreaInsets.bottom

      if (placement === 'top') {
        bottom = 0
      } else if (placement === 'bottom') {
        top = 0
      } else if (placement === 'left') {
        right = 0
      } else if (placement === 'right') {
        left = 0
      }

      return {
        padding: top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px'
      }
    })

    function onHeaderRightClick() {
      if (props.showClose) {
        popup.onCloseClick()
      }
    }

    watch(
      () => props.showMask,
      val => (popupOptions.enableUseBlur = !val),
      { immediate: true }
    )

    return {
      ...popup,
      alignClassName,
      hasHeader,
      innerStyles,
      onHeaderRightClick
    }
  }
})
</script>
