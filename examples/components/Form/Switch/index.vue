<template>
  <div>
    <fx-group title="基础用法">
      <fx-cell label="开关"><fx-switch /></fx-cell>
    </fx-group>
    <fx-group title="自定义颜色/大小">
      <fx-cell label="红色"
        ><fx-switch activeColor="#8b1721" color="#d79996"
      /></fx-cell>
      <fx-cell label="40px"><fx-switch size="40" /></fx-cell>
    </fx-group>
    <fx-group title="禁用">
      <fx-cell label="关"><fx-switch disabled /></fx-cell>
      <fx-cell label="开"><fx-switch disabled :modelValue="true" /></fx-cell>
    </fx-group>
    <fx-group title="事件监听">
      <fx-cell label="change">
        <fx-switch v-model="value" @change="onChange" />
      </fx-cell>
    </fx-group>
  </div>
</template>

<script>
import { showToast } from '@/Toast'

export default {
  name: 'ExpSwitch',
  data() {
    return { value: false }
  },
  methods: {
    onChange({ value }) {
      console.log(value)
      showToast(value ? '开' : '关')
    }
  }
}
</script>
