<template>
  <LoadingIcon
    class="fx-activity-indicator"
    :class="{ animated }"
    :size="size"
    :rate="0.2"
    :strokeWidth="0.0537 * parseFloat(size as string)"
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
      type: [Number, String],
      default: 20
    },
    // 主色
    color: {
      type: String
    }
  }
})
</script>
