<template>
  <svg
    class="fx-loading-icon"
    :height="size"
    :width="size"
    viewBox="0 0 1024 1024"
  >
    <circle
      class="fx-loading-icon_track"
      r="448"
      cx="512"
      cy="512"
      :stroke-width="(strokeWidth / parseFloat(size as string)) * 896"
      fill="none"
      :style="{ stroke: backgroundColor }"
    ></circle>
    <circle
      class="fx-loading-icon_thumb"
      r="448"
      cx="512"
      cy="512"
      :stroke="color"
      :stroke-dasharray="314 * 8.96 * rate + ',' + 314 * 8.96"
      :stroke-width="(strokeWidth / parseFloat(size as string)) * 896"
      fill="none"
      transform="rotate(-90,512,512)"
      stroke-linecap="round"
      :style="{ stroke: color }"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'fx-loading-icon',
  props: {
    rate: {
      type: Number,
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
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    }
  }
})
</script>
