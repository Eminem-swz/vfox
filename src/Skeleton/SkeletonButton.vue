<template>
  <div
    class="fx-skeleton-button"
    :class="[shapeClassName, { animated: useAnimation }]"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { propAnimated, propButtonShape } from '@/Skeleton/skeleton'
import { useSubSkeleton } from '@/Skeleton/use-skeleton'

export default defineComponent({
  name: 'fx-skeleton-button',
  props: {
    // 是否显示动画
    animated: propAnimated,
    // 指定按钮的形状
    shape: propButtonShape
  },
  setup(props) {
    const { shapeClassName, useAnimation } = useSubSkeleton(props, 'button')

    return {
      shapeClassName,
      useAnimation
    }
  }
})
</script>
