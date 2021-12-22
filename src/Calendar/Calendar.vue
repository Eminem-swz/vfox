<template>
  <div class="fx-calendar" :class="{ disabled }" ref="root">
    <SelectorField
      :label="fieldLabel"
      :value="fieldValue"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      @fieldClick="onFieldClick"
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
import { defineComponent, ref, watch } from 'vue'
import { SelectorField } from '@/SelectorField'
import { CalendarPopup } from '@/CalendarPopup'
import { getDefaultDetail, MODE_NAMES, commonProps } from '@/Calendar/calendar'
import { formItemEmits, formItemProps } from '@/Form/form'
import { getEnumsValue } from '@/helpers/validator'
import type { CalendarDetail } from './types'
import { useHandlers } from '@/Calendar/use-calendar'
import { cloneDetail, isSameValue } from '@/Picker/util'
import type { PickerModelValue } from '../Picker/types'

export default defineComponent({
  name: 'fx-calendar',
  components: { SelectorField, CalendarPopup },
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
  emits: [...formItemEmits, 'focus', 'blur'],
  setup(props, ctx) {
    const { emit } = ctx
    const isInitPopup = ref(false)
    const popupVisible = ref(true)
    const fieldLabel = ref('')
    const fieldValue = ref('')
    const popup = ref()
    const root = ref<HTMLElement>()

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

      fieldLabel.value = _detail.label
      fieldValue.value =
        detail.value != null
          ? detail.valueArray.map(v => v.join('-')).join(',')
          : ''

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

      _changeValue = getDetail().value
      emit('update:modelValue', getDetail().value)
      emit('change', getDetail().value)
    }

    watch(
      () => props.modelValue,
      val => {
        if (_changeValue != null && isSameValue(val, _changeValue)) {
          updateValue(val)
        }

        _changeValue = null
      }
    )

    watch([isInitPopup, popupVisible], vals => {
      if (vals[0] && vals[1]) {
        emit('focus')
      } else if (!vals[1]) {
        emit('blur')
      }
    })

    updateValue(props.modelValue)

    return {
      root,
      isInitPopup,
      popupVisible,
      fieldLabel,
      fieldValue,
      popup,
      onFieldClick,
      onConfirm
    }
  }
})
</script>
