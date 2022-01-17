<template>
  <div>
    <fx-group title="基础用法">
      <div class="tab-box">
        <fx-tab
          :options="shortTabList"
          v-model:activeValue="shortActiveValue"
        ></fx-tab>
      </div>
    </fx-group>
    <fx-group title="滚动（阈值 scrollThreshold = 4）">
      <div class="tab-box">
        <fx-tab :options="tabList" v-model:activeValue="activeValue"></fx-tab>
      </div>
    </fx-group>
    <fx-group title="Mix">
      <div class="tab-box">
        <fx-tab :options="mixTabList"></fx-tab>
      </div>
    </fx-group>
    <fx-group title="带副标签">
      <div class="tab-box">
        <fx-tab :options="subTabList"></fx-tab>
      </div>
    </fx-group>
    <fx-group title="change 事件">
      <div class="tab-box">
        <fx-tab :options="shortTabList" @change="onChange"></fx-tab>
      </div>
    </fx-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { shortTabList, tabList, mixTabList, subTabList } from './data'
import { TabOnChange, showToast } from '@/index'

export default defineComponent({
  name: 'ExpTab',
  setup() {
    const onChange: TabOnChange = res => {
      console.log('change', res)
      showToast(`切换到第${res.index + 1}个`)
    }

    return {
      shortActiveValue: ref(1),
      activeValue: ref(1),
      shortTabList,
      tabList,
      mixTabList,
      subTabList,

      onChange
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/style/var.scss';

.tab-box {
  background-color: $background-color;
}
</style>
