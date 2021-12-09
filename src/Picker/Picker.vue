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
      :formName="formName"
      :placeholder="placeholder"
      @field-click="onFieldClick"
    />
    <PickerPopup
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
import { PickerInput } from '@/PickerInput'
import { PickerPopup } from '@/PickerPopup'
import { formItemEmits, formItemProps } from '@/Form/form'
import { pickerEmits, pickerProps, commonProps } from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'

export default defineComponent({
  name: 'fx-picker',
  components: { PickerInput, PickerPopup },
  props: { ...formItemProps, ...commonProps, ...pickerProps },
  emits: [...formItemEmits, ...pickerEmits],
  setup(props, ctx) {
    return {
      ...usePicker(props, ctx, { name: 'picker' }, {})
    }
  }
})
</script>
