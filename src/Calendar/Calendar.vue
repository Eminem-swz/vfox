<template>
  <div class="fx-calendar" :class="{ disabled }" ref="root">
    <PickerInput
      :formLabelString="formLabel"
      :formValueString="formLabel"
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
      v-model:visible="popupVisible"
      v-if="isInitPopup"
      @confirm="onConfirm"
      ref="popup"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import PickerInput from '@/PickerInput'
import CalendarPopup from '@/CalendarPopup'
import {
  cloneDetail,
  getDefaultDetail,
  getDetail as _getDetail,
  isSameDateArray,
  MODE_NAMES,
  parseValues,
  commonProps
} from '@/Calendar/calendar'
import { isFunction, isUndefined } from '@/helpers/util'
import dayjs from '@/helpers/day'
import { formItemEmits, formItemProps } from '@/Form/form'
import { useFormItem } from '@/Form/use-form'
import { getEnumsValue } from '@/helpers/validator'
import type { DetailObject } from './types'

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
    formatter: {
      type: Function,
      default: null
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
    const formLabel = ref('')
    const formValue = reactive<Date[]>([])
    const popup = ref()

    const mode = getEnumsValue(MODE_NAMES, props.initialMode)
    let detail = getDefaultDetail()
    let _changeValue: Date | Date[] | null = null

    function updateValue(val: unknown) {
      if (popup.value) {
        return updateDetail(popup.value.updateValue(val))
      } else {
        return updateDetail(_getDetail(parseValues(val, mode), mode))
      }
    }

    function updateDetail(_detail: DetailObject) {
      detail = _detail
      formLabel.value = _detail.formatted
      formValue.splice(0, Infinity, ...getDetail().value)

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

    function onConfirm(_detail: DetailObject) {
      if (isSameDateArray(detail.value, _detail.value)) {
        return
      }

      updateDetail(_detail)
      const formatValue = hookFormValue()
      _changeValue = formatValue
      emit('update:modelValue', formatValue)
      emit('change', getDetail())

      validateAfterEventTrigger('change', formatValue)
    }

    const { formName, validateAfterEventTrigger, hookFormValue, root } =
      useFormItem<Date>(props, ctx, {
        formValue,
        hookFormValue() {
          const newValue = cloneDetail(detail).value
          if (isFunction(props.formatter)) {
            return props.formatter(
              newValue,
              function formatter(template: string) {
                return newValue.map(date => {
                  return dayjs(date).format(template)
                })
              }
            )
          }
          return newValue
        },
        hookResetValue: () => updateValue(defaultValue).value
      })

    watch(
      () => props.modelValue,
      val => {
        if (!isUndefined(_changeValue) && _changeValue == val) {
          //
        } else {
          updateValue(val)
        }

        _changeValue = null
      }
    )

    updateValue(props.modelValue)

    const defaultValue = cloneDetail(detail).value

    return {
      root,
      isInitPopup,
      popupVisible,
      formName,
      formLabel,
      formValue,
      popup,
      hookFormValue,
      validateAfterEventTrigger,
      onFieldClick,
      onConfirm,
      defaultValue
    }
  }
})
</script>
