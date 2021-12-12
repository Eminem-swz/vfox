<template>
  <PickerView
    class="fx-date-picker-view"
    :handlers="handlers"
    @update:modelValue="onUpdateValue"
    @change="onChange"
  >
  </PickerView>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PickerView } from '@/PickerView'
import { pickerViewEmits } from '@/Picker/picker'
import { datePickerProps } from '@/DatePicker/date-picker'
import { useDatePicker, useView } from '@/DatePicker/use-date-picker'
import type { ChangeArgs, DateDetailObject } from './types'
import type { Formatter, Parser, PickerFormatValue } from '../Picker/types'

export default defineComponent({
  name: 'fx-date-picker-view',
  components: { PickerView },
  props: {
    ...datePickerProps,
    formater: {
      type: Function as PropType<Formatter>
    },
    parser: {
      type: Function as PropType<Parser>
    }
  },
  emits: [...pickerViewEmits],
  setup(props, ctx) {
    const { emit } = ctx
    const { handlers } = useView(props)

    function onChange(e: DateDetailObject) {
      emit('change', e)
    }

    function onUpdateValue(e: PickerFormatValue) {
      emit('update:modelValue', e)
    }

    return {
      handlers,
      onChange,
      onUpdateValue
    }
  }
})
</script>
