<template>
  <div
    class="fx-cascader"
    :class="[
      {
        disabled
      }
    ]"
    ref="root"
  >
    <PickerInput
      :formLabelString="formLabelString"
      :formValueString="formValueString"
      :disabled="disabled"
      :formName="formName"
      :placeholder="placeholder"
      @field-click="onFieldClick"
    />
    <CascaderPopup
      :formatString="formatString"
      :initialSeparator="initialSeparator"
      :options="options"
      :fieldNames="fieldNames"
      :modelValue="modelValue"
      :title="placeholder"
      v-model:visible="popupVisible"
      v-if="isInitPopup"
      @change="onChange"
      ref="popup"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CascaderPopup } from '@/CascaderPopup'
import { PickerInput } from '@/PickerInput'
import { formItemEmits, formItemProps } from '@/Form/form'
import {
  pickerEmits,
  pickerProps,
  commonProps,
  mergeHandlers
} from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-cascader',
  components: { CascaderPopup, PickerInput },
  props: { ...formItemProps, ...commonProps, ...pickerProps },
  emits: [...formItemEmits, ...pickerEmits],
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
