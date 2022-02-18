<template>
  <svg>
    <use :xlink:href="useName"></use>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import icons from '@fox2/vfox-icons'

export default defineComponent({
  name: 'fx-svg-icon',
  props: {
    iconName: {
      type: String
    }
  },
  setup(props) {
    const useName = computed(() => {
      return `#${icons['fx-' + props.iconName] ? 'fx-' : ''}${props.iconName}`
    })

    return {
      useName
    }
  }
})
</script>
