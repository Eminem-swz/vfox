<template>
  <div class="fx-cascader" :class="{ disabled }" ref="root">
    <SelectorField
      :label="fieldLabel"
      :value="fieldValue"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      @fieldClick="onFieldClick"
    />
    <CascaderPopup
      :options="options"
      :fieldNames="fieldNames"
      :modelValue="modelValue"
      :formatter="formatter"
      :parser="parser"
      v-model:visible="popupVisible"
      v-if="isInitPopup"
      @confirm="onConfirm"
      ref="popup"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CascaderPopup } from '../CascaderPopup'
import { SelectorField } from '../SelectorField'
import {
  pickerEmits,
  pickerProps,
  mergeHandlers,
  commonProps
} from '../Picker/picker'
import { usePicker } from '../Picker/use-picker'

export default defineComponent({
  name: 'fx-cascader',
  components: { CascaderPopup, SelectorField },
  props: { ...commonProps, ...pickerProps },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, {
        name: 'cascader',
        handlers: mergeHandlers({
          formatter: props.formatter,
          parser: props.parser
        })
      })
    }
  }
})
</script>
