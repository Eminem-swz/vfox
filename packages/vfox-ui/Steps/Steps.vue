<template>
  <div class="fx-steps" :class="{ dot, horizontal }" ref="listEl">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, toRef } from 'vue'
import { useList } from '../hooks/use-list'

export default defineComponent({
  name: 'fx-steps',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    dot: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:activeIndex': (activeIndex: number) =>
      typeof activeIndex === 'number'
  },
  setup(props, { emit }) {
    const { listEl } = useList('steps', $items => {
      if (props.activeIndex >= $items.length) {
        emit('update:activeIndex', $items.length - 1)
      }
    })

    provide(`fxStepsActiveIndex`, toRef(props, 'activeIndex'))

    return { listEl }
  }
})
</script>
