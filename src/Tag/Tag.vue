<template>
  <div
    class="fx-tag"
    :class="[classNames, { disabled: !!disabled }]"
    :style="styles"
    ref="root"
  >
    <slot></slot>
    <Icon
      icon="CloseOutlined"
      :class="{ disabled: !!disabled }"
      @mousedown.stop="noop"
      @touchstart.stop="noop"
      @click="onClose"
      v-if="closable"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '@/Icon'
import {
  colorValidator,
  createEnumsValidator,
  getEnumsValue
} from '@/helpers/validator'
import { SIZE_TYPES, STATE_TYPES } from '@/helpers/constants'
import { useLongPress } from '@/hooks/use-long-press'
import { noop } from '@/helpers/util'
import type { SizeType, StateType, StyleObject } from '../helpers/types'
import { getColorObject } from '@/helpers/color'

type TagPatternType = 'light' | 'dark' | 'plain'
const TAG_PATTERN_TYPES: TagPatternType[] = ['light', 'dark', 'plain']

export default defineComponent({
  name: 'fx-tag',
  components: { Icon },
  props: {
    size: {
      type: String as PropType<SizeType>,
      validator: createEnumsValidator(SIZE_TYPES),
      default: null
    },
    type: {
      type: String as PropType<StateType>,
      validator: createEnumsValidator(STATE_TYPES),
      default: null
    },
    // 款式
    pattern: {
      type: String as PropType<TagPatternType>,
      validator: createEnumsValidator(TAG_PATTERN_TYPES),
      default: null
    },
    // 可关闭的
    closable: {
      type: Boolean,
      default: false
    },
    // 禁用的
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object],
      validator: colorValidator
    }
  },
  emits: ['close', 'click', 'long-press'],
  setup(props, { emit }) {
    const root = ref<HTMLElement>()

    function onClose() {
      if (!props.disabled) {
        emit('close', {
          type: 'close'
        })
      }
    }

    function onLongPress(e: { type: string }) {
      if (!props.disabled) {
        emit(e.type as 'click' | 'long-press', e)
      }
    }

    const classNames = computed(() => {
      const { hasColor, isDark } = getColorObject(props.color as string)

      return [
        'type--' +
          (hasColor ? STATE_TYPES[1] : getEnumsValue(STATE_TYPES, props.type)),
        'size--' + getEnumsValue(SIZE_TYPES, props.size),
        'pattern--' +
          (hasColor && props.pattern !== 'plain'
            ? isDark
              ? 'dark'
              : 'light'
            : getEnumsValue(TAG_PATTERN_TYPES, props.pattern))
      ]
    })

    const styles = computed(() => {
      const obj: StyleObject = {}

      const colorObj = getColorObject(props.color as string)

      if (colorObj.hasColor) {
        obj[`--fx-color`] = colorObj.varColor
        obj[`--fx-black-color`] = colorObj.varBlackColor
      }

      return obj
    })

    useLongPress(root, onLongPress)

    return {
      root,
      classNames,
      noop,
      onClose,
      styles
    }
  }
})
</script>
