<template>
  <div class="fx-skeleton" :class="{ animated }">
    <slot>
      <div class="fx-skeleton_layout">
        <div class="fx-skeleton_layout-left" v-if="avatar">
          <SkeletonAvatar />
        </div>
        <div class="fx-skeleton_layout-right">
          <SkeletonTitle />
          <SkeletonParagraph />
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkeletonAvatar from './SkeletonAvatar.vue'
import SkeletonTitle from './SkeletonTitle.vue'
import SkeletonParagraph from './SkeletonParagraph.vue'

export default defineComponent({
  name: 'fx-skeleton-layout',
  props: { animated: Boolean, avatar: Boolean },
  components: {
    SkeletonAvatar,
    SkeletonTitle,
    SkeletonParagraph
  }
})
</script>
