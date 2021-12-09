<template>
  <LoadingIcon
    class="fx-activity-indicator"
    :class="{ animated }"
    :size="size"
    :rate="0.2"
    :strokeWidth="0.0537 * size"
    :color="color"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoadingIcon } from '@/LoadingIcon'

export default defineComponent({
  name: 'fx-activity-indicator',
  components: { LoadingIcon },
  props: {
    animated: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 20
    },
    // 主色
    color: {
      type: String,
      default: null
    }
  }
})
</script>
