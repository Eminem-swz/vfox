<template>
  <div :class="classNames" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue'
import type { PropType } from 'vue'
import { isNumeric } from '@/helpers/util'
import type { StyleObject } from '../helpers/types'
import { createEnumsValidator } from '@/helpers/validator'

type JustifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
const JUSTIFY_TYPE: JustifyType[] = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between'
]
type AlignType = 'top' | 'middle' | 'bottom'
const ALIGN_TYPE: AlignType[] = ['top', 'middle', 'bottom']

export default defineComponent({
  name: 'fx-row',
  props: {
    // 栅格间隔
    gutter: {
      type: [Number, String, Array] as PropType<number | string | number[]>,
      validator: (value: number | string | number[]) => {
        if (Array.isArray(value) && typeof value[0] === 'number') {
          return true
        } else if (isNumeric(value)) {
          return true
        }

        return false
      },
      default: 0
    },
    // 水平排列方式
    justify: {
      type: String as PropType<JustifyType>,
      validator: createEnumsValidator(JUSTIFY_TYPE),
      default: 'start'
    },
    // 垂直对齐方式
    align: {
      type: String as PropType<AlignType>,
      validator: createEnumsValidator(ALIGN_TYPE),
      default: 'top'
    }
  },
  setup(props) {
    const gutter = reactive([0, 0])

    const styles = computed(() => {
      const [gH, gV] = gutter
      const styles: StyleObject = {}

      if (gH > 0 || gV > 0) {
        styles.margin = `-${gV / 2}px -${gH / 2}px ${gV / 2}px `
      }

      return styles
    })

    const classNames = computed(() => {
      const arr = [`fx-row`]

      JUSTIFY_TYPE.includes(props.justify) &&
        arr.push(`justify--${props.justify}`)

      ALIGN_TYPE.includes(props.align) && arr.push(`align--${props.align}`)

      return arr
    })

    watch(
      () => props.gutter,
      val => {
        if (isNumeric(val)) {
          gutter[0] = Math.max(0, parseFloat(val as string))
          gutter[1] = 0
        } else if (Array.isArray(val)) {
          val[0] >= 0 && (gutter[0] = val[0])
          val[1] >= 0 && (gutter[1] = val[1])
        }
      },
      {
        immediate: true
      }
    )

    provide('fxRowGutter', gutter)

    return {
      styles,
      classNames
    }
  }
})
</script>
