<template>
  <fx-group title="基础用法">
    <div class="exp-sideTab-box">
      <fx-side-tab
        :options="tabList"
        v-model:activeValue="activeValue"
      ></fx-side-tab>
    </div>
  </fx-group>
  <fx-group title="Mix">
    <div class="exp-sideTab-box">
      <fx-side-tab :options="mixTabList"></fx-side-tab>
    </div>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mixTabList, tabList } from '../Tab/data'

export default defineComponent({
  name: 'ExpSideTab',
  setup() {
    return {
      activeValue: ref(1),
      mixTabList,
      tabList
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.exp-sideTab-box {
  height: 220px;
  padding-right: 275px;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
</style>
