<template>
  <PickerView
    class="fx-date-picker-view"
    @update:modelValue="onUpdateValue"
    @change="onChange"
  >
  </PickerView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PickerView } from '../PickerView'
import { pickerValueEmits } from '../Picker/picker'
import { commonProps } from '../DatePicker/date-picker'
import { useHandlers } from '../DatePicker/use-date-picker'
import type { SelectorModelValue } from '../SelectorField/types'

export default defineComponent({
  name: 'fx-date-picker-view',
  components: { PickerView },
  props: {
    ...commonProps
  },
  emits: { ...pickerValueEmits },
  setup(props, ctx) {
    const { emit } = ctx

    useHandlers(props)

    function onChange(e: SelectorModelValue) {
      emit('change', e)
    }

    function onUpdateValue(e: SelectorModelValue) {
      emit('update:modelValue', e)
    }

    return {
      onChange,
      onUpdateValue
    }
  }
})
</script>
