<template>
  <fx-group title="基础用法">
    <ul class="exp-backTop-box">
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
      <li>Scroll to bottom 往下滑</li>
    </ul>
  </fx-group>
  <fx-back-top></fx-back-top>
  <fx-back-top :offset="[0, -50]">UP</fx-back-top>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpBackTop'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-backTop-box {
  list-style: none;
  padding: 6px 0;
  margin: 0;
  box-sizing: border-box;
  height: 1500px;

  li {
    line-height: 32px;
    font-size: 14px;
    color: $title-color;
    padding: 0 16px;
  }
}
</style>
