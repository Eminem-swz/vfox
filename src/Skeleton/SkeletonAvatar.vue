<template>
  <div
    class="fx-skeleton-avatar"
    :class="[shapeClassName, { animated: useAnimation }]"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { propAnimated, propAvatarShape } from '../Skeleton/skeleton'
import { useSubSkeleton } from '../Skeleton/use-skeleton'

export default defineComponent({
  name: 'fx-skeleton-avatar',
  props: {
    // 是否显示动画
    animated: propAnimated,
    // 指定头像的形状
    shape: propAvatarShape
  },
  setup(props) {
    const { shapeClassName, useAnimation } = useSubSkeleton(props, 'avatar')

    return {
      shapeClassName,
      useAnimation
    }
  }
})
</script>
