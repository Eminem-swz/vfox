<template>
  <div>
    <fx-group title="基础用法">
      <fx-picker-view
        :options="options"
        @change="onChange"
        v-model="value"
      ></fx-picker-view>
    </fx-group>
    <fx-group title="多列">
      <fx-picker-view
        :options="multiOptions"
        @change="onChange"
        v-model="multValue"
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
      <div class="exp-picker-view-box">
        <div class="exp-picker-view-header">
          分割线“-”，v-model: {{ formatValue }}
        </div>
        <div class="exp-picker-view-body">
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
        v-model="multValue"
      ></fx-picker-view>
    </fx-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { showToast } from '@/Toast'
import type {
  PickerValueFormatter,
  PickerValueParser,
  PickerChangeArgs
} from '@/types'
import { cascadeOptions, multiOptions, options } from '../Picker/data'

export default defineComponent({
  name: 'ExpPickerView',
  setup() {
    const separator = '-'

    const value = reactive([])
    const multValue = reactive([])
    const cascadeValue = reactive([])
    const formatValue = ref(`2001${separator}夏`)

    const formatter: PickerValueFormatter = (valueArray, labelArray) => {
      return {
        value: valueArray.join(separator),
        label: labelArray.join(separator)
      }
    }

    const parser: PickerValueParser = value => {
      return value ? (value as string).split(separator) : []
    }

    function onChange(res: PickerChangeArgs) {
      console.log('event', res)
    }

    function onChangeEvent(e: PickerChangeArgs) {
      onChange(e)

      showToast(`change: ${e.label}`)
    }

    return {
      options,
      multiOptions,
      cascadeOptions,

      value,
      multValue,
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

.exp-picker-view {
  &-header {
    text-align: center;
    font-size: 17px;
    line-height: 24px;
    color: $title-color;
    padding: 12px 16px;
  }
}
</style>
