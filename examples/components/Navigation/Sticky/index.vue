<template>
  <fx-group title="Sticky View">
    <fx-sticky-view
      class="exp-sticky-box"
      v-model:activeIndex="activeIndex"
      @change="onChange"
    >
      <fx-sticky-view-item name="Sticky 1">
        <div class="exp-sticky-box-1"></div>
      </fx-sticky-view-item>
      <fx-sticky-view-item name="Sticky 2">
        <div class="exp-sticky-box-2"></div>
      </fx-sticky-view-item>
      <fx-sticky-view-item name="Sticky 3">
        <div class="exp-sticky-box-3"></div>
      </fx-sticky-view-item>
      <fx-sticky-view-item name="Sticky 4">
        <div class="exp-sticky-box-4"></div>
      </fx-sticky-view-item>
    </fx-sticky-view>
    <!-- <div class="exp-sticky-box" id="stickyContainer">
      <div class="exp-sticky-header">
        头部
      </div>
      <div class="exp-sticky-box-1">
        <fx-sticky-view :container="'#stickyContainer'" :offset-top="50">哈哈哈</fx-sticky-view>
      </div>
    </div> -->
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { StickyViewOnChange } from '@/index'

export default defineComponent({
  name: 'ExpSticky',
  setup() {
    const activeIndex = ref(0)

    const onChange: StickyViewOnChange = res => {
      console.log('change', res)
    }

    return {
      activeIndex,

      onChange
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-sticky {
  &-box {
    height: 500px;
  }

  &-header {
    height: 100px;
  }

  &-box-1 {
    height: 1000px;
    background: $primary-color;
    background-image: linear-gradient(
      0,
      $primary-color-2 0%,
      $primary-color 100%
    );
  }

  &-box-2 {
    height: 1000px;
    background: $success-color;
    background-image: linear-gradient(
      0,
      $success-color-2 0%,
      $success-color 100%
    );
  }

  &-box-3 {
    height: 1000px;
    background: $warning-color;
    background-image: linear-gradient(
      0,
      $warning-color-2 0%,
      $warning-color 100%
    );
  }

  &-box-4 {
    height: 1000px;
    background: $danger-color;
    background-image: linear-gradient(
      0,
      $danger-color-2 0%,
      $danger-color 100%
    );
  }
}
</style>
