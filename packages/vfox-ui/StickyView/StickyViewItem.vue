<template>
  <div class="fx-sticky-view-item" :data-name="name" ref="root">
    <div class="fx-sticky-view-item_header">{{ name }}</div>
    <div class="fx-sticky-view-item_body"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useListItem } from '../hooks/use-list'

export default defineComponent({
  name: 'fx-sticky-view-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    useListItem('stickyView')

    return {}
  }
})
</script>
