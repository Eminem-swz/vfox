<template>
  <div
    class="fx-circle-progress"
    :style="{ fontSize: Math.max(9, nSize * 0.17 * 0.875) + 'px' }"
  >
    <LoadingIcon
      class="fx-circle-progress_bar"
      :size="nSize"
      :rate="rate"
      :strokeWidth="strokeWidth"
      :color="color"
    />
    <div
      class="fx-circle-progress_text"
      :style="{ padding: strokeWidth + 'px' }"
    >
      <slot :progress="progress">
        {{ progress }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { LoadingIcon } from '@/LoadingIcon'
import { isNumeric, rangeInteger } from '@/helpers/util'

export default defineComponent({
  name: 'fx-circle-progress',
  components: { LoadingIcon },
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
    size: {
      type: [Number, String],
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 5.37
    },
    color: {
      type: String
    }
  },
  setup(props) {
    return {
      nSize: computed(() => {
        return parseFloat(props.size as string)
      }),
      rate: computed(() => {
        return rangeInteger(props.percentage, 0, 100) / 100
      }),
      progress: computed(() => {
        return rangeInteger(props.percentage, 0, 100) + '%'
      })
    }
  }
})
</script>
