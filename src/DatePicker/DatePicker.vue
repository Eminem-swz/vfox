<template>
  <div class="fx-picker" :class="{ disabled }" ref="root">
    <SelectorField
      :label="fieldLabel"
      :value="fieldValue"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      @fieldClick="onFieldClick"
    />
    <PickerPopup
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
import { SelectorField } from '@/SelectorField'
import { PickerPopup } from '@/PickerPopup'
import { pickerEmits, pickerProps } from '@/Picker/picker'
import { usePicker } from '@/Picker/use-picker'
import { commonProps } from '@/DatePicker/date-picker'
import { useHandlers } from '@/DatePicker/use-date-picker'

export default defineComponent({
  name: 'fx-date-picker',
  components: { SelectorField, PickerPopup },
  props: { ...commonProps, ...pickerProps },
  emits: { ...pickerEmits },
  setup(props, ctx) {
    const { handlers } = useHandlers(props)

    return {
      ...usePicker(props, ctx, { name: 'picker', handlers })
    }
  }
})
</script>
