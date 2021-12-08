<template>
  <div>
    <fx-group title="基础用法">
      <fx-cell label="家电">
        <fx-cascader :options="options" placeholder="选择家电" />
      </fx-cell>
      <fx-cell label="地区">
        <fx-cascader
          :options="regionOptions"
          :field-names="{ value: 'label' }"
          placeholder="选择地区"
        />
      </fx-cell>
      <fx-cell label="v-model">
        <fx-cascader
          :options="options"
          placeholder="选择家电"
          v-model="value"
        />
      </fx-cell>
    </fx-group>
    <fx-group title="事件监听">
      <fx-cell label="change">
        <fx-cascader
          :options="options"
          placeholder="选择家电"
          @change="onChange"
        />
      </fx-cell>
    </fx-group>
    <fx-group title="API">
      <fx-cell label="showCascader" isLink @click="onCallApi()"></fx-cell>
    </fx-group>
  </div>
</template>

<script>
import { cascadeOptions, regionOptions } from '../Picker/data'
import { showToast } from '@/Toast'
import { showDialog } from '@/Dialog'
import { showCascader } from '@/Cascader'

export default {
  name: 'ExpCascader',
  props: {},
  data() {
    return {
      options: cascadeOptions,
      regionOptions,
      value: ['bingxiang', 'duikaimen']
    }
  },
  methods: {
    onChange(res) {
      console.log('change', res)

      showDialog({
        title: '选择了',
        showCancel: false,
        content: `label: '${res.labelString}'\nvalue: ${res.valueString}`
      })
    },
    onCallApi() {
      showCascader({
        title: '家电',
        options: cascadeOptions,
        success: res => {
          console.log('success', res)
          if (res.cancel) {
            showToast('取消了')
          } else {
            showToast(`选择了 ${res.detail.labelString}`)
          }
        }
      })
    }
  }
}
</script>
