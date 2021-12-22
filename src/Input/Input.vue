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
      v-show="inputValue && active"
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
import { Icon } from '@/Icon'
import { isNumeric, isNumber, isStringNumberMix } from '@/helpers/util'
import { formatInputDigit, formatInputNumber } from '@/helpers/input'
import { getEnumsValue } from '@/helpers/validator'
import { formItemEmits, formItemProps } from '@/Form/form'

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
      type: [String, Number],
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
      type: [String, Number],
      validator: isStringNumberMix,
      default: null
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
  emits: [...formItemEmits, 'input', 'focus', 'blur'],
  setup(props, ctx) {
    const inputEl = ref()
    const active = ref(false)
    const inputValue = ref('')
    const { emit } = ctx

    function updateValue(value: string | number) {
      value = value.toString() as string

      switch (props.type) {
        case 'digit':
          value = formatInputDigit(value)
          break

        case 'number':
          value = formatInputNumber(value)
          break

        default:
          break
      }

      let isChange = false

      const $input = getInputEl()
      if ($input) {
        if ($input.value != value) {
          $input.value = value.toString()
        }
        value = $input.value
      }

      if (value !== inputValue.value) {
        inputValue.value = value.toString()
        isChange = true
      }

      if (value != props.modelValue) {
        emit('update:modelValue', inputValue.value)
      }

      return { value, isChange }
    }

    function updateInput(newVal: string) {
      const { value, isChange } = updateValue(newVal)

      isChange && emit('input', { value, type: 'input' })
    }

    let isComposition = false

    function onCompositionStart() {
      isComposition = true
    }

    function onCompositionEnd(e: Event) {
      isComposition = false
      updateInput((e.target as HTMLInputElement).value)
    }

    function onFocus(e: Event) {
      active.value = true
      emit(e.type, e)
    }

    function onBlur(e: Event) {
      active.value = false
      emit(e.type, e)
    }

    function onInput(e: Event) {
      if (!isComposition) {
        updateInput((e.target as HTMLInputElement).value)
      }
    }

    function onChange(e: Event) {
      emit(e.type, inputValue.value)
    }

    function onClear() {
      updateInput('')
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
        const $input = getInputEl()

        $input && $input[val ? 'focus' : 'blur']()
      }
    )

    function getInputEl(): undefined | HTMLInputElement {
      return inputEl.value
    }

    const maxLength = computed(() => {
      if (isNumber(props.maxlength)) {
        return Math.round(props.maxlength as number)
      }
      if (isNumeric(props.maxlength)) {
        return Math.round(parseFloat(props.maxlength as string))
      }

      return 140
    })

    onMounted(() => {
      updateValue(props.modelValue ?? '')

      const $input = getInputEl()

      if ($input) {
        $input.defaultValue = $input.value
        props.focus && $input.focus()
      }
    })

    return {
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
      maxLength
    }
  }
})
</script>
