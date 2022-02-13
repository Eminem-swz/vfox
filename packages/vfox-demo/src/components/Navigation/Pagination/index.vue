<template>
  <fx-group title="基础用法">
    <fx-pagination v-model:current="current" :total="total"></fx-pagination>
  </fx-group>
  <fx-group title="Slot default">
    <fx-pagination v-model:current="current2" :total="total">
      <template #default="{ current }"> 第 {{ current }} 页 </template>
    </fx-pagination>
  </fx-group>
  <fx-group title="Slot prev & next">
    <fx-pagination v-model:current="current3" :total="total">
      <template #prev> 上一页 </template>
      <template #next> 下一页 </template>
    </fx-pagination>
  </fx-group>
  <fx-group title="CSS height=32px">
    <fx-pagination
      style="height: 32px"
      v-model:current="current4"
      :total="total"
    ></fx-pagination>
  </fx-group>
  <fx-group title="事件监听 change">
    <fx-pagination
      v-model:current="current5"
      :total="total"
      @change="onChange"
    ></fx-pagination>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { showToast, PaginationOnChange } from '@/index'

export default defineComponent({
  name: 'ExpPagination',
  setup() {
    const current = ref(1)
    const current2 = ref(1)
    const current3 = ref(1)
    const current4 = ref(1)
    const current5 = ref(1)
    const total = 5

    const onChange: PaginationOnChange = e => {
      console.log(e)
      showToast(`跳转到第 ${e.current} 页`)
    }

    return {
      current,
      current2,
      current3,
      current4,
      current5,
      total,
      onChange
    }
  }
})
</script>
