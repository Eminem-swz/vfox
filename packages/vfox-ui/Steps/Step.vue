<template>
  <div
    class="fx-step fx-steps-item fx-horizontal-hairline"
    :class="{ active, finish }"
    ref="root"
  >
    <div class="fx-step_line"></div>
    <div class="fx-step_index">
      <slot name="step" :index="index" :active="active" :finish="finish">{{
        index + 1
      }}</slot>
    </div>
    <div class="fx-step_inner">
      <div class="fx-step_title" v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="fx-step_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue'
import { useListItem } from '../hooks/use-list'

export default defineComponent({
  name: 'fx-step',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const activeIndex = inject(`fxStepsActiveIndex`, ref(0))
    const root = ref<HTMLElement>()

    const { index } = useListItem('steps', root)

    const active = computed(() => {
      return activeIndex.value === index.value
    })

    const finish = computed(() => {
      return index.value < activeIndex.value
    })

    return {
      root,
      index,
      active,
      finish
    }
  }
})
</script>
