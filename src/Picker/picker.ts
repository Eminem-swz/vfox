import type { PropType } from 'vue'
import { getDefaultFieldNames } from '@/Picker/util'
import type {
  UserFieldNames,
  UserOptionItem,
  UserParser,
  UserFormatter,
  PickerDetail,
  PickerHandlers,
  PickerFormatValue,
  PickerValue
} from './types'
import { stringNumberArrayMixValidator } from '@/helpers/validator'
import {
  isNumber,
  isStringNumberMixArray,
  isString,
  isArray,
  isSameArray,
  isDate,
  isSameDate,
  cloneData,
  isDateArray,
  objectForEach
} from '@/helpers/util'

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
  },
  formatter: {
    type: Function as PropType<UserFormatter>,
    default: null
  },
  parser: {
    type: Function as PropType<UserParser>,
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

export const defaultFormatter: UserFormatter = (valueArray, labelArray) => {
  return {
    value: valueArray,
    label: labelFormatter(labelArray)
  }
}

export const defaultParser: UserParser = value => {
  if (isNumber(value)) {
    return [value as number]
  } else if (isString(value) && value) {
    return [value as string]
  } else if (isStringNumberMixArray(value)) {
    return cloneValue(value as (string | number)[]) as PickerValue[]
  }

  return []
}

export function getDefaultDetail(): PickerDetail {
  return {
    value: [],
    label: ''
  }
}

export function isSameValue(aVal: unknown, bVal: unknown) {
  if (isArray(aVal) && isArray(bVal)) {
    return isSameArray(aVal as string[], bVal as string[])
  }

  if (isDate(aVal) && isDate(bVal)) {
    return isSameDate(aVal as Date, bVal as Date)
  }

  return aVal === bVal
}

export function isSameDetail(a: PickerDetail, b: PickerDetail) {
  return isSameValue(a.value, b.value)
}

export function cloneValue(value: PickerFormatValue) {
  if (isDate(value)) {
    return new Date(value as Date)
  } else if (isDateArray(value)) {
    const newValue: Date[] = []
    ;(value as Date[]).forEach(date => {
      newValue.push(new Date(date))
    })
    return newValue
  }

  return cloneData(value)
}

export function cloneDetail(detail: PickerDetail) {
  const newDetail = cloneData(detail)
  newDetail.value = cloneValue(detail.value)

  return newDetail
}

export function mergeHandlers(...handlersArray: Partial<PickerHandlers>[]) {
  const handlers: PickerHandlers = {
    formatter: defaultFormatter,
    parser: defaultParser,
    labelFormatter
  }

  handlersArray.forEach(handlersItem => {
    objectForEach(handlersItem, (value, key) => {
      if (value) {
        // 规避 undefined 问题
        handlers[key as 'parser'] = value as UserParser
      }
    })
  })

  return handlers
}
