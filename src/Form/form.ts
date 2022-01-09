import { emitEventValidator, emitTypeValidator } from '@/helpers/validator'

export const formItemProps = {
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export const isStringValue = (value: string) => typeof value === 'string'
export const isNumberValue = (value: number) => typeof value === 'number'

export const formStringValueEmits = {
  'update:modelValue': isStringValue,
  change: isStringValue,
  input: isStringValue
}

export const formNumberValueEmits = {
  'update:modelValue': isNumberValue,
  change: isNumberValue,
  input: isNumberValue
}

export const formFocusEmits = {
  focus: emitEventValidator,
  blur: emitEventValidator
}

export const formActiveEmits = {
  focus: emitTypeValidator,
  blur: emitTypeValidator
}
