<template>
  <fx-group title="基础用法">
    <div class="exp-skeleton-panel">
      <fx-skeleton />
    </div>
  </fx-group>
  <fx-group title="显示头像">
    <div class="exp-skeleton-panel">
      <fx-skeleton avatar />
    </div>
  </fx-group>
  <fx-group title="带动画">
    <div class="exp-skeleton-panel">
      <fx-skeleton avatar :animated="animated" :avatarShape="avatarShape" />
    </div>
  </fx-group>
  <fx-group title="显示子组件">
    <div class="exp-skeleton-panel">
      <div class="exp-skeleton-switch">
        <fx-switch v-model="loadingSwitch" />
      </div>
      <fx-skeleton avatar :loading="!loadingSwitch">
        <div class="exp-skeleton-sub-component">
          <fx-icon icon="HeartFilled" size="32" />
          <h4 class="title">hello World</h4>
          <p class="paragraph">简单不先于复杂，而是在复杂之后。</p>
        </div>
      </fx-skeleton>
    </div>
  </fx-group>
  <fx-group title="自由组合">
    <div class="exp-skeleton-panel">
      <fx-skeleton class="exp-skeleton-custom" :buttonShape="buttonShape">
        <template #layout>
          <fx-skeleton-image />
          <fx-skeleton-title />
          <fx-skeleton-paragraph :row="2" />
          <fx-skeleton-button />
        </template>
      </fx-skeleton>
    </div>
  </fx-group>
</template>

<script lang="ts">
import { SkeletonAvatarShape, SkeletonButtonShape } from '@/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExpSkeleton',
  setup() {
    const animated = ref(true)
    const avatarShape = ref<SkeletonAvatarShape>('circle')
    const buttonShape = ref<SkeletonButtonShape>('default')
    const loadingSwitch = ref(false)

    return {
      animated,
      avatarShape,
      buttonShape,
      loadingSwitch
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-skeleton {
  &-panel {
    padding: 16px;
  }

  &-switch {
    margin-bottom: 16px;
  }

  &-sub-component {
    overflow: hidden;

    .fx-icon {
      float: left;
    }

    .title {
      margin: 8px 0 14px 44px;
      font-size: 14px;
      line-height: 16px;
      color: $title-color;
    }

    .paragraph {
      margin: 8px 0 0 44px;
      line-height: 28px;
      font-size: 12px;
      color: $font-color;
    }
  }

  &-custom {
    overflow: hidden;

    .fx-skeleton-image {
      float: left;
      width: 100px !important;
      height: 100px !important;
    }

    .fx-skeleton-title {
      margin-left: 112px;
      margin-bottom: 20px;
    }

    .fx-skeleton-paragraph {
      margin-left: 112px;
    }

    .fx-skeleton-button {
      margin: 20px 0 0 112px;
    }
  }
}
</style>
