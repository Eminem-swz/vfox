<template>
  <fx-group title="基础用法">
    <div class="exp-loadMore-box">
      <fx-load-more></fx-load-more>
    </div>
  </fx-group>
  <fx-group title="Slot defaut">
    <div class="exp-loadMore-box">
      <fx-load-more>暂无数据</fx-load-more>
    </div>
  </fx-group>
  <fx-group title="loading=true">
    <div class="exp-loadMore-box">
      <fx-load-more loading>加载中...</fx-load-more>
    </div>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpLoadMore'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-loadMore {
  &-box {
    padding: 16px 0;
  }
}
</style>
