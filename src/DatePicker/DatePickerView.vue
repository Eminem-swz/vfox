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
import { defineComponent } from 'vue'
import PickerView from '@/PickerView'
import { pickerViewEmits } from '@/Picker/picker'
import { datePickerProps } from '@/DatePicker/date-picker'
import { useDatePicker } from '@/DatePicker/use-date-picker'
import type { ChangeArgs, DateDetailObject } from './types'

export default defineComponent({
  name: 'fx-date-picker-view',
  components: { PickerView },
  props: {
    ...datePickerProps
  },
  emits: [...pickerViewEmits],
  setup(props, ctx) {
    const { emit } = ctx
    const { handlers } = useDatePicker(props)

    function onChange(e: DateDetailObject) {
      emit(
        'change',
        Object.assign(
          {
            type: 'change'
          },
          e
        ) as ChangeArgs
      )
    }

    function onUpdateValue(e: any) {
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
