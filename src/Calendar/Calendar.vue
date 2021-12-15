<template>
  <div class="fx-calendar" :class="{ disabled }" ref="root">
    <PickerInput
      :formLabelString="formLabelString"
      :formValueString="formValueString"
      :disabled="disabled"
      :formName="formName"
      :placeholder="placeholder"
      @field-click="onFieldClick"
    />
    <CalendarPopup
      :modelValue="modelValue"
      :minDate="minDate"
      :maxDate="maxDate"
      :initialMode="initialMode"
      :allowSameDay="allowSameDay"
      :maxRange="maxRange"
      :dayHandler="dayHandler"
      :firstDayOfWeek="firstDayOfWeek"
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
import { defineComponent, reactive, ref, watch } from 'vue'
import { PickerInput } from '@/PickerInput'
import { CalendarPopup } from '@/CalendarPopup'
import { getDefaultDetail, MODE_NAMES, commonProps } from '@/Calendar/calendar'
import { formItemEmits, formItemProps } from '@/Form/form'
import { useFormItem } from '@/Form/use-form'
import { getEnumsValue } from '@/helpers/validator'
import type { CalendarDetail } from './types'
import { useHandlers } from '@/Calendar/use-calendar'
import { cloneDetail, isSameValue } from '@/Picker/util'
import type { PickerModelValue, PickerValue } from '../Picker/types'

export default defineComponent({
  name: 'fx-calendar',
  components: { PickerInput, CalendarPopup },
  props: {
    ...commonProps,
    ...formItemProps,
    placeholder: {
      type: String,
      default: ''
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  emits: [...formItemEmits],
  setup(props, ctx) {
    const { emit } = ctx
    const isInitPopup = ref(false)
    const popupVisible = ref(true)
    const formLabelString = ref('')
    const formValueString = ref('')
    const formValue = reactive<number[]>([])
    const popup = ref()

    const mode = getEnumsValue(MODE_NAMES, props.initialMode)

    const { formatter, parser } = useHandlers(props, { mode })

    let detail: CalendarDetail = getDefaultDetail()
    let _changeValue: PickerModelValue | null = null

    function updateValue(val: unknown) {
      if (popup.value) {
        return updateDetail(popup.value.updateValue(val))
      } else {
        return updateDetail(formatter(parser(val)))
      }
    }

    function updateDetail(_detail: CalendarDetail) {
      detail = _detail

      formLabelString.value = _detail.label
      formValueString.value =
        detail.value != null ? detail.value.toString() : ''
      formValue.splice(0, Infinity, ...parser(getDetail().value))

      return getDetail()
    }

    function onFieldClick() {
      if (!props.disabled) {
        if (!isInitPopup.value) {
          isInitPopup.value = true
        } else {
          popupVisible.value = true
        }
      }
    }

    function getDetail() {
      return cloneDetail(detail)
    }

    function onConfirm(_detail: CalendarDetail) {
      if (isSameValue(detail.value, _detail.value)) {
        return
      }

      updateDetail(_detail)

      _changeValue = hookFormValue()
      emit('update:modelValue', hookFormValue())
      emit('change', getDetail())

      validateAfterEventTrigger('change', hookFormValue())
    }

    const { formName, validateAfterEventTrigger, hookFormValue, root } =
      useFormItem<PickerValue>(props, ctx, {
        formValue,
        hookFormValue: () => getDetail().value,
        hookResetValue: () => updateValue(formatter([]).value).value
      })

    watch(
      () => props.modelValue,
      val => {
        if (_changeValue != null && isSameValue(val, _changeValue)) {
          updateValue(val)
        }

        _changeValue = null
      }
    )

    updateValue(props.modelValue)

    return {
      root,
      isInitPopup,
      popupVisible,
      formName,
      formLabelString,
      formValue,
      formValueString,
      popup,
      hookFormValue,
      validateAfterEventTrigger,
      onFieldClick,
      onConfirm
    }
  }
})
</script>
