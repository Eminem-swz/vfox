<template>
  <div :class="classNames" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { StyleObject } from '../helpers/types'
import type { JustifyType, AlignType } from './types'
import { createEnumsValidator } from '@/helpers/validator'
import { parseGutter, propGutter } from '@/Row/row'

const JUSTIFY_TYPE: JustifyType[] = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between'
]
const ALIGN_TYPE: AlignType[] = ['top', 'middle', 'bottom']

export default defineComponent({
  name: 'fx-row',
  props: {
    // 栅格间隔
    gutter: propGutter,
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
    const gutter = ref([0, 0])

    const styles = computed(() => {
      const [gH, gV] = gutter.value
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
        gutter.value = parseGutter(val)
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
