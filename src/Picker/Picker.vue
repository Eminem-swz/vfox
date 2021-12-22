<template>
  <div
    class="fx-picker"
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
      :formName="name"
      :placeholder="placeholder"
      @field-click="onFieldClick"
    />
    <PickerPopup
      :options="options"
      :fieldNames="fieldNames"
      :modelValue="modelValue"
      :title="placeholder"
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
import { PickerInput } from '@/PickerInput'
import { PickerPopup } from '@/PickerPopup'
import { formItemEmits, formItemProps } from '@/Form/form'
import {
  pickerEmits,
  pickerProps,
  commonProps,
  mergeHandlers
} from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-picker',
  components: { PickerInput, PickerPopup },
  props: { ...formItemProps, ...commonProps, ...pickerProps },
  emits: [...formItemEmits, ...pickerEmits],
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, {
        name: 'picker',
        handlers: mergeHandlers({
          formatter: props.formatter,
          parser: props.parser
        })
      })
    }
  }
})
</script>
