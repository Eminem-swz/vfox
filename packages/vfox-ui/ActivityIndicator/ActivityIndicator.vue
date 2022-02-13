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
import { LoadingIcon } from '../LoadingIcon'
import { colorValidator } from '../helpers/validator'

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
    color: {
      type: String,
      validator: colorValidator
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
