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
import { PickerView } from '@/PickerView'
import { pickerViewEmits } from '@/Picker/picker'
import { commonProps } from '@/DatePicker/date-picker'
import { useHandlers } from '@/DatePicker/use-date-picker'
import type { DateDetailObject } from './types'
import type { PickerModelValue } from '../Picker/types'

export default defineComponent({
  name: 'fx-date-picker-view',
  components: { PickerView },
  props: {
    ...commonProps
  },
  emits: [...pickerViewEmits],
  setup(props, ctx) {
    const { emit } = ctx

    useHandlers(props)

    function onChange(e: DateDetailObject) {
      emit('change', e)
    }

    function onUpdateValue(e: PickerModelValue) {
      emit('update:modelValue', e)
    }

    return {
      onChange,
      onUpdateValue
    }
  }
})
</script>
