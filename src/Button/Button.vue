<template>
  <button
    class="fx-button"
    :class="[
      classNames,
      {
        'has--icon': loading || icon,
        ghost: !!ghost,
        transparent: !!transparent
      }
    ]"
    :disabled="disabled"
    :type="realFormType"
    :style="styles"
  >
    <Icon v-if="loading" icon="LoadingOutlined" :spin="true" />
    <Icon v-else-if="icon" :icon="icon" />
    <span><slot>button</slot></span>
  </button>
</template>

<script lang="ts">
import { inject, defineComponent, computed, getCurrentInstance } from 'vue'
import type { PropType, ComponentInternalInstance } from 'vue'
import { Icon } from '@/Icon'
import {
  colorValidator,
  createEnumsValidator,
  getEnumsValue,
  iconValidator
} from '@/helpers/validator'
import { SIZE_TYPES, STATE_TYPES } from '@/helpers/constants'
import { BUTTON_PATTERN_TYPES, BUTTON_SHAPE_TYPES } from '@/Button/button'
import type { SizeType, StateType, StyleObject } from '../helpers/types'
import type {
  ButtonGroupOptions,
  ButtonPatternType,
  ButtonShapeType
} from './types'
import { useGroupItem } from '@/hooks/use-group'
import { getColorGroups, isDarkColor } from '@/helpers/color'

const FORM_TYPES = ['button', 'submit', 'reset']
type FormTypes = 'button' | 'submit' | 'reset'

export default defineComponent({
  name: 'fx-button',
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
    pattern: {
      type: String as PropType<ButtonPatternType>,
      validator: createEnumsValidator(BUTTON_PATTERN_TYPES),
      default: null
    },
    shape: {
      type: String as PropType<ButtonShapeType>,
      validator: createEnumsValidator(BUTTON_SHAPE_TYPES),
      default: null
    },
    formType: {
      type: String as PropType<FormTypes>,
      validator: createEnumsValidator(FORM_TYPES),
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: null,
      validator: iconValidator,
      default: null
    },
    ghost: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object],
      validator: colorValidator
    }
  },
  setup(props) {
    const uid = (getCurrentInstance() as ComponentInternalInstance).uid
    const buttonGroupOptions = inject<ButtonGroupOptions | null>(
      'fxButtonGroupOptions',
      null
    )

    const classNames = computed(() => {
      const { size, pattern, shape } = buttonGroupOptions || props

      return [
        'type--' +
          (props.color && colorValidator(props.color as string)
            ? STATE_TYPES[1]
            : getEnumsValue(STATE_TYPES, props.type)),
        'pattern--' + getEnumsValue(BUTTON_PATTERN_TYPES, pattern),
        'size--' + getEnumsValue(SIZE_TYPES, size),
        'shape--' + getEnumsValue(BUTTON_SHAPE_TYPES, shape)
      ]
    })

    const realFormType = computed(() => {
      return getEnumsValue(FORM_TYPES, props.formType) as FormTypes
    })

    const styles = computed(() => {
      const obj: StyleObject = {}

      if (props.color && colorValidator(props.color as string)) {
        const colors = getColorGroups(props.color as string)
        const isDark = isDarkColor(props.color as string)
        const pattern = getEnumsValue(
          BUTTON_PATTERN_TYPES,
          buttonGroupOptions?.pattern || props.pattern
        )

        obj[`--fx-color`] = colors[5]
        obj[`--fx-dark-color`] = colors[6]
        obj[`--fx-light-color`] = colors[4]

        if (!isDark && (pattern === 'default' || pattern === 'gradient')) {
          // 浅色背景情况，字体颜色升四阶
          obj[`--fx-front-color`] = colors[9]
        }
      }

      return obj
    })

    useGroupItem('button', uid)

    return {
      realFormType,
      classNames,
      styles
    }
  }
})
</script>
