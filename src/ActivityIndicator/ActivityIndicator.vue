<template>
  <LoadingIcon
    class="fx-activity-indicator"
    :class="{ animated }"
    :size="nSize"
    :rate="0.2"
    :strokeWidth="0.0537 * nSize"
    :color="color"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
  },
  setup(props) {
    return {
      nSize: computed(() => {
        return parseFloat(props.size as string)
      })
    }
  }
})
</script>
