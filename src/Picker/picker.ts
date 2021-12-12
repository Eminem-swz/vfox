import type { PropType } from 'vue'
import { getDefaultFieldNames } from '@/Picker/util'
import type {
  UserFieldNames,
  UserOptionItem,
  Values,
  Parser,
  Formatter
} from './types'
import { stringNumberArrayMixValidator } from '@/helpers/validator'
import { isNumber, isStringNumberMixArray, isString } from '@/helpers/util'

export const commonProps = {
  modelValue: {
    type: [String, Number, Array],
    validator: stringNumberArrayMixValidator,
    default: () => ''
  },
  formatString: {
    type: Boolean,
    default: false
  },
  initialSeparator: {
    type: [String, Function],
    default: '/'
  },
  options: {
    type: Array,
    default: () => [] as UserOptionItem[]
  },
  fieldNames: {
    type: Object as PropType<UserFieldNames>,
    default: getDefaultFieldNames
  },
  handlers: {
    type: Object,
    default: null
  }
}

export const pickerProps = {
  placeholder: {
    type: String,
    default: ''
  }
}

export const pickerEmits = ['value-change']

export const pickerPopupProps = {
  title: {
    type: String,
    default: ''
  }
}

export const pickerViewEmits = ['change', 'update:modelValue', '_change']

export const labelFormatter = (labelArray: string[]) => {
  return labelArray.join('/')
}

export const defaultFormatter: Formatter = (valueArray, labelArray) => {
  return {
    value: valueArray,
    label: labelFormatter(labelArray)
  }
}

export const defaultParser: Parser = value => {
  if (isNumber(value)) {
    return [value as number]
  } else if (isString(value) && value) {
    return [value as string]
  } else if (isStringNumberMixArray(value)) {
    return value as (string | number)[]
  }

  return []
}
