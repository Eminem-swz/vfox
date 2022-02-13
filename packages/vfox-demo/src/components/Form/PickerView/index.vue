<template>
  <fx-group title="基础用法">
    <fx-picker-view
      :options="options"
      @change="onChange"
      v-model="colValue"
    ></fx-picker-view>
  </fx-group>
  <fx-group title="多列">
    <fx-picker-view
      :options="multiOptions"
      @change="onChange"
      v-model="multiValue"
    ></fx-picker-view>
  </fx-group>
  <fx-group title="级联">
    <fx-picker-view
      :options="cascadeOptions"
      @change="onChange"
      v-model="cascadeValue"
    ></fx-picker-view>
  </fx-group>
  <fx-group title="formatter/parser">
    <div class="exp-pickerView-box">
      <div class="exp-pickerView-header">
        分割线“-”，v-model: {{ formatValue }}
      </div>
      <div class="exp-pickerView-body">
        <fx-picker-view
          v-model="formatValue"
          :formatter="formatter"
          :parser="parser"
          :options="multiOptions"
          @change="onChange"
        ></fx-picker-view>
      </div>
    </div>
  </fx-group>
  <fx-group title="change 事件">
    <fx-picker-view
      :options="multiOptions"
      @change="onChangeEvent"
      v-model="multiValue"
    ></fx-picker-view>
  </fx-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  showToast,
  SelectorValueFormatter,
  SelectorValueParser,
  SelectorModelValue
} from '@/index'
import { cascadeOptions, multiOptions, options } from '../Picker/data'

export default defineComponent({
  name: 'ExpPickerView',
  setup() {
    const separator = '-'

    const colValue = ref([])
    const multiValue = ref([])
    const cascadeValue = ref([])
    const formatValue = ref(`2001${separator}夏`)

    const formatter: SelectorValueFormatter = (valueArray, labelArray) => {
      return {
        value: valueArray.join(separator),
        label: labelArray.join(separator)
      }
    }

    const parser: SelectorValueParser = value => {
      return value ? (value as string).split(separator) : []
    }

    function onChange(res: SelectorModelValue) {
      console.log('change', res)
    }

    function onChangeEvent(res: SelectorModelValue) {
      onChange(res)

      showToast(`change: ${res}`)
    }

    return {
      options,
      multiOptions,
      cascadeOptions,

      colValue,
      multiValue,
      cascadeValue,
      formatValue,

      onChange,
      onChangeEvent,

      formatter,
      parser
    }
  }
})
</script>

<style lang="scss">
@import '@/style/var.scss';

.exp-pickerView {
  &-header {
    text-align: center;
    font-size: 17px;
    line-height: 24px;
    color: $title-color;
    padding: 12px 16px;
  }
}
</style>
