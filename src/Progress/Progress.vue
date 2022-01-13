<template>
  <div class="fx-progress" :class="{ 'fixed-bar': !!fixedBar }" :style="styles">
    <div class="fx-progress_bar">
      <div
        class="fx-progress_track"
        :class="{ animated: !!animated }"
        :style="[{ width: progress }]"
      ></div>
    </div>
    <div class="fx-progress_text" v-if="$slots.default || showText">
      <slot :progress="progress">
        {{ showText ? progress : '' }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isNumeric, rangeInteger } from '@/helpers/util'
import type { StyleObject } from '../helpers/types'
import { colorValidator } from '@/helpers/validator'

export default defineComponent({
  name: 'fx-progress',
  props: {
    percentage: {
      type: [Number, String],
      validator: (val: string | number) => {
        return (
          isNumeric(val) &&
          parseFloat(val as string) >= 0 &&
          parseFloat(val as string) <= 100
        )
      },
      default: 0,
      required: true
    },
    showText: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
    fixedBar: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup(props) {
    const styles = computed(() => {
      const obj: StyleObject = {}

      props.color && (obj['--fx-color'] = props.color)

      return obj
    })

    return {
      progress: computed(() => {
        return rangeInteger(props.percentage, 0, 100) + '%'
      }),
      styles
    }
  }
})
</script>
