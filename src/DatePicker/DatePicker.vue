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
      :title="placeholder"
      :formatter="formatter"
      :parser="parser"
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
import { pickerEmits, pickerProps } from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'
import { commonProps } from '@/DatePicker/date-picker'
import { useHandlers } from '@/DatePicker/use-date-picker'

export default defineComponent({
  name: 'fx-date-picker',
  components: { PickerInput, PickerPopup },
  props: { ...formItemProps, ...commonProps, ...pickerProps },
  emits: [...formItemEmits, ...pickerEmits],
  setup(props, ctx) {
    const { handlers } = useHandlers(props)

    return {
      ...usePicker(props, ctx, { name: 'picker', handlers })
    }
  }
})
</script>
