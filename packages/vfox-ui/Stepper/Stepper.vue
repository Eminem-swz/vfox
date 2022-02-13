<template>
  <div class="fx-stepper" :class="{ disabled }">
    <Button
      icon="MinusOutlined"
      shape="square"
      size="small"
      :disabled="disabled || disabledMinus || parseFloat(inputValue) <= min"
      @click="onMinusOrPlusClick(false)"
    ></Button>
    <input
      class="fx-stepper_input"
      :type="allowDecimal ? 'text' : 'tel'"
      :inputmode="allowDecimal ? 'decimal' : 'numeric'"
      :name="name"
      :disabled="disabled"
      :readonly="disabledInput"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      ref="input"
    />
    <Button
      icon="PlusOutlined"
      shape="square"
      size="small"
      :disabled="disabled || disabledPlus || parseFloat(inputValue) >= max"
      @click="onMinusOrPlusClick(true)"
    ></Button>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent, watch } from 'vue'
import { Button } from '../Button'
import { rangeInteger, rangeNumber } from '../helpers/util'
import { formatInputNumber } from '../helpers/input'
import {
  formStringValueEmits,
  formItemProps,
  formFocusEmits
} from '../Form/form'
import { useInput } from '../Form/use-form'
import { emitTypeValidator } from '../helpers/validator'

export default defineComponent({
  name: 'fx-stepper',
  components: { Button },
  props: {
    ...formItemProps,
    modelValue: {
      type: [Number, String],
      default: null
    },
    // 是否禁用减少按钮
    disabledMinus: {
      type: Boolean,
      default: false
    },
    // 是否禁用增加按钮
    disabledPlus: {
      type: Boolean,
      default: false
    },
    // 是否禁用输入框
    disabledInput: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    allowDecimal: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 1
    },
    decimalLength: {
      type: Number,
      default: null
    }
  },
  emits: {
    ...formStringValueEmits,
    ...formFocusEmits,
    'plus-click': emitTypeValidator,
    'minus-click': emitTypeValidator
  },
  setup(props, { emit }) {
    const isValueNull = props.modelValue == null
    const inputValue = ref('1')

    const { input, setInputValue, getInputValue } = useInput()

    function onMinusOrPlusClick(isPlus = true) {
      let type = 'plus-click'

      if (isPlus) {
        updateValue(parseFloat(inputValue.value) + props.step)
      } else {
        updateValue(parseFloat(inputValue.value) - props.step)
        type = 'minus-click'
      }

      emit(type as 'plus-click', { type })
    }

    function updateValue(value: number | string, isEventChange = true) {
      const newValue = getRangeNumber(value)

      if (newValue !== inputValue.value) {
        inputValue.value = newValue
        if (isEventChange) {
          emit('change', newValue)
        }
      }

      setInputValue(newValue)

      if (newValue != props.modelValue) {
        emit('update:modelValue', newValue)
      }

      return newValue
    }

    function getRangeNumber(value: string | number) {
      value = formateNumber(value)

      if (value === '') {
        value = props.min
      }

      if (props.allowDecimal) {
        value = rangeNumber(parseFloat(value as string), props.min, props.max)
      } else {
        value = rangeInteger(Math.floor(value as number), props.min, props.max)
      }

      return value.toString()
    }

    function formateNumber(value: string | number): string {
      return formatInputNumber(value, props.decimalLength)
    }

    function proxyEvent(e: Event) {
      emit(e.type as 'focus', e)
    }

    function onChange() {
      updateValue(getInputValue())
    }

    function onInput() {
      const value = formateNumber(getInputValue())
      setInputValue(value)

      emit('input', value)
    }

    watch(
      () => props.modelValue,
      val => {
        if (
          val != null &&
          parseFloat(val.toString()) !== parseFloat(inputValue.value)
        ) {
          updateValue(val, false)
        }
      }
    )

    onMounted(() => {
      setInputValue(inputValue.value)
    })

    updateValue(props.modelValue, false)
    if (isValueNull) {
      emit('change', inputValue.value)
    }

    return {
      input,
      inputValue,
      onFocus: proxyEvent,
      onBlur: proxyEvent,
      onChange,
      onInput,
      onMinusOrPlusClick
    }
  }
})
</script>
