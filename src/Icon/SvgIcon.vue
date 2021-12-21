<template>
  <svg>
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './icons'

export default defineComponent({
  name: 'fx-svg-icon',
  props: {
    iconName: {
      type: String
    }
  }
})
</script>
