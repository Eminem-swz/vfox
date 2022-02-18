<template>
  <label
    class="fx-input"
    :class="{
      'has--prepend': $slots.prepend,
      'has--append': $slots.append,
      'fx-textarea': type === 'textarea',
      focus: active,
      disabled
    }"
  >
    <div class="fx-input_prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <textarea
      v-if="type === 'textarea'"
      class="fx-input_input fx-input_textarea"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxLength"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      ref="input"
    ></textarea>
    <input
      v-else
      class="fx-input_input"
      :name="name"
      :type="inputType"
      :inputmode="inputMode"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxLength"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @compositionstart="onCompositionStart"
      @compositionend="onCompositionEnd"
      ref="input"
    />
    <span class="fx-input_limit" v-if="showLimit && maxLength > 0"
      >{{ inputValue.length }}/{{ maxLength }}</span
    >
    <Icon
      v-if="showClear"
      v-show="isShowClear"
      class="fx-input_clear"
      icon="CloseCircleFilled"
      @mousedown.prevent="onClear"
    />
    <div class="fx-input_append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Icon } from '../Icon'
import { isNumeric, isNumber, isStringNumberMix } from '../helpers/util'
import { formatInputDigit, formatInputNumber } from '../helpers/input'
import { getEnumsValue } from '../helpers/validator'
import {
  formFocusEmits,
  formItemProps,
  formStringValueEmits
} from '../Form/form'
import { useInput } from '../Form/use-form'

const TYPE_NAMES = [
  'text',
  'number',
  'digit',
  'tel',
  'password',
  'search',
  'textarea'
]

export default defineComponent({
  name: 'fx-input',
  components: { Icon },
  props: {
    ...formItemProps,
    maxlength: {
      type: [Number, String],
      validator: (val: number | string) => {
        return isNumeric(val) || val === ''
      },
      default: 140
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [Number, String],
      validator: (val: number | string) => isStringNumberMix(val)
    },
    focus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showClear: {
      type: Boolean,
      default: false
    },
    // 展示字数限制文本
    showLimit: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    ...formStringValueEmits,
    ...formFocusEmits
  },
  setup(props, ctx) {
    const active = ref(false)
    const isShowClear = ref(false)
    const inputValue = ref('')
    const { emit } = ctx

    const { input, setFocus, setBlur, getInputValue, setInputValue } =
      useInput()

    function updateValue(value: string | number) {
      let newValue = value.toString()

      switch (props.type) {
        case 'digit':
          newValue = formatInputDigit(newValue)
          break

        case 'number':
          newValue = formatInputNumber(newValue)
          break

        default:
          break
      }

      let isChange = false

      if (newValue !== getInputValue()) {
        setInputValue(newValue)
      }

      if (newValue !== inputValue.value) {
        inputValue.value = newValue
        isChange = true
      }

      if (newValue != props.modelValue) {
        emit('update:modelValue', newValue)
      }

      return { value: newValue, isChange }
    }

    function updateInput(newVal: string) {
      const { value, isChange } = updateValue(newVal)

      isChange && emit('input', value)
    }

    let isComposition = false

    function onCompositionStart() {
      isComposition = true
    }

    function onCompositionEnd() {
      isComposition = false
      updateInput(getInputValue())
    }

    function onFocus(e: Event) {
      active.value = true
      emit('focus', e)
    }

    function onBlur(e: Event) {
      active.value = false
      emit('blur', e)
    }

    function onInput() {
      if (!isComposition) {
        updateInput(getInputValue())
      }
    }

    function onChange() {
      emit('change', inputValue.value)
    }

    function onClear() {
      updateInput('')
      emit('change', inputValue.value)
    }

    const inputType = computed(() => {
      if (props.type === 'number') {
        return 'text'
      }

      if (props.type === 'digit') {
        return 'tel'
      }

      return getEnumsValue(TYPE_NAMES, props.type)
    })

    const inputMode = computed(() => {
      let mode: 'search' | 'numeric' | 'decimal' | 'tel' | 'text' | 'none' =
        'none'

      switch (props.type) {
        case 'search':
          mode = 'search'
          break

        case 'digit':
          mode = 'numeric'
          break

        case 'number':
          mode = 'decimal'
          break

        case 'tel':
          mode = 'tel'
          break

        case 'text':
          mode = 'text'
          break

        default:
          break
      }

      return mode
    })

    watch(
      () => props.modelValue,
      val => {
        val != inputValue.value && updateValue(val ?? '')
      }
    )

    watch(
      () => props.focus,
      val => {
        val ? setFocus() : setBlur()
      }
    )

    const maxLength = computed(() => {
      if (isNumber(props.maxlength)) {
        return Math.round(props.maxlength as number)
      }
      if (isNumeric(props.maxlength)) {
        return Math.round(parseFloat(props.maxlength as string))
      }

      return 140
    })

    let timer: number
    watch([inputValue, active], ([ipVal, isActive]) => {
      clearTimeout(timer)
      if (ipVal && isActive) {
        timer = window.setTimeout(() => (isShowClear.value = true), 200)
      } else {
        isShowClear.value = false
      }
    })

    onMounted(() => {
      updateValue(props.modelValue ?? '')

      props.focus && setFocus()
    })

    return {
      input,
      inputValue,
      active,
      onCompositionStart,
      onCompositionEnd,
      onFocus,
      onBlur,
      onInput,
      onChange,
      onClear,
      inputType,
      inputMode,
      maxLength,
      isShowClear
    }
  }
})
</script>
