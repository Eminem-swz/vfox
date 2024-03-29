import type { PropType } from 'vue'
import type { AnyObject, VoidFnToBooleanFn } from '../helpers/types'
import type {
  UserFieldNames,
  UserOptionItem,
  PickerHandlers,
  FieldNames,
  PickerOptionsHandler,
  OptionItem,
  ColRow
} from './types'
import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail,
  SelectorValueParser,
  SelectorValueFormatter,
  SelectorOnChange
} from '../SelectorField/types'
import {
  isNumber,
  isStringNumberMixArray,
  objectForEach,
  isObject,
  isStringNumberMix
} from '../helpers/util'
import Exception from '../helpers/exception'
import { cloneValue } from '../Picker/util'
import { formActiveEmits, formItemProps } from '../Form/form'
import { popupEmits } from '../popup/popup'

export const getDefaultFieldNames: () => FieldNames = () => {
  return { label: 'label', value: 'value', children: 'children' }
}

export const commonProps = {
  modelValue: {
    type: [Date, String, Number, Array] as PropType<SelectorModelValue>
  },
  options: {
    type: Array as PropType<UserOptionItem[]>,
    default: () => [] as UserOptionItem[]
  },
  fieldNames: {
    type: Object as PropType<UserFieldNames>,
    default: getDefaultFieldNames
  },
  formatter: {
    type: Function as PropType<SelectorValueFormatter>
  },
  parser: {
    type: Function as PropType<SelectorValueParser>
  }
}

export const pickerProps = {
  ...formItemProps,
  placeholder: {
    type: String,
    default: ''
  }
}

const isValue = (value: SelectorValue) => {
  return isStringNumberMix(value) || value instanceof Date
}

const isModelValue = (value: SelectorModelValue) => {
  if (Array.isArray(value)) {
    return (
      value.filter(v => {
        return !isValue(v)
      }).length === 0
    )
  }
  return isValue(value)
}

export const isPickerDetail = <T extends SelectorDetail = SelectorDetail>(
  detail: T
) => {
  return (
    detail && isModelValue(detail.value) && typeof detail.label === 'string'
  )
}

export const pickerValueEmits: {
  change: VoidFnToBooleanFn<SelectorOnChange>
  'update:modelValue': VoidFnToBooleanFn<SelectorOnChange>
} = {
  change: isModelValue,
  'update:modelValue': isModelValue
}

export const pickerEmits = { ...pickerValueEmits, ...formActiveEmits }

export const pickerPopupProps = {
  title: {
    type: String,
    default: ''
  }
}

export const pickerPopupEmits = {
  ...popupEmits,
  ...pickerValueEmits,
  confirm: (payload: SelectorDetail) => isPickerDetail(payload)
}

export const labelFormatter = (labelArray: string[]) => {
  return labelArray.join('/')
}

export const defaultFormatter: SelectorValueFormatter = (
  valueArray,
  labelArray
) => {
  return {
    value: valueArray,
    label: labelFormatter(labelArray)
  }
}

export const defaultParser: SelectorValueParser = value => {
  if (isNumber(value)) {
    return [value as number]
  } else if (typeof value === 'string' && value) {
    return [value]
  } else if (isStringNumberMixArray(value)) {
    return cloneValue(value as (string | number)[]) as SelectorValue[]
  }

  return []
}

export function getDefaultDetail(): SelectorDetail {
  return {
    value: [],
    label: ''
  }
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
        handlers[key as 'parser'] = value as SelectorValueParser
      }
    })
  })

  return handlers
}

export function getColRows(options: OptionItem[], indexes: number[]) {
  const rows: ColRow[] = []

  options.forEach((item, index) => {
    rows.push({
      label: item.label,
      value: item.value,
      hasChildren: item.children && item.children.length > 0,
      indexes: [...indexes, index]
    })
  })

  return rows
}

export function parseOptions(
  options: UserOptionItem[] | UserOptionItem[][],
  fieldNames: FieldNames
) {
  const newOptions: OptionItem[] | OptionItem[][] = []

  if (Array.isArray(options)) {
    options.forEach(option => {
      if (Array.isArray(option)) {
        // 二维数组
        const subOptions = parseOptions(
          option as UserOptionItem[],
          fieldNames
        ) as OptionItem[]

        if (subOptions.length > 0) {
          ;(newOptions as OptionItem[][]).push(subOptions)
        }
      } else if (isNumber(option) || typeof option === 'string') {
        // 纯数值或者字符串
        ;(newOptions as OptionItem[]).push({
          label: option.toString(),
          value: option as string,
          children: [],
          disabled: false
        })
      } else if (isObject(option)) {
        const newOption = option as AnyObject

        if (isStringNumberMix(newOption[fieldNames.value])) {
          ;(newOptions as OptionItem[]).push({
            label: (newOption[fieldNames.label] == null
              ? newOption[fieldNames.value]
              : newOption[fieldNames.label]) as string,
            value: newOption[fieldNames.value] as string,
            disabled: newOption.disabled ? true : false,
            children: parseOptions(
              newOption[fieldNames.children],
              fieldNames
            ) as OptionItem[]
          })
        }
      }
    })
  }

  return newOptions
}

interface ValidateReturn {
  valid: boolean
  value: SelectorValue[]
  label: string[]
}

/**
 * 非级联检查
 * @param values
 * @param options
 */
function validateCols(
  values: SelectorValue[],
  options: OptionItem[] | OptionItem[][]
): ValidateReturn {
  const optionList = Array.isArray(options[0])
    ? (options as OptionItem[][])
    : [options as OptionItem[]]
  let selectCount = 0
  const value: SelectorValue[] = []
  const label: string[] = []

  optionList.forEach((subOptionList, colIndex) => {
    for (let i = 0; i < subOptionList.length; i++) {
      const optionItem = subOptionList[i]

      if (optionItem.value == values[colIndex]) {
        selectCount++
        value.push(optionItem.value)
        label.push(optionItem.label)
        break
      }
    }
  })

  return selectCount === optionList.length
    ? {
        valid: true,
        value,
        label
      }
    : {
        valid: false,
        value: [],
        label: []
      }
}

/**
 * 级联检查
 * @param values
 * @param options
 */
function validateCascadeCols(
  values: SelectorValue[],
  options: OptionItem[],
  virtualHandler?: PickerOptionsHandler | null
): ValidateReturn {
  const value: SelectorValue[] = []
  const label: string[] = []

  function addData(optionItem: OptionItem) {
    value.push(optionItem.value)
    label.push(optionItem.label)
  }

  function deep(
    optionList: OptionItem[],
    valueIndex: number,
    indexes: number[]
  ): boolean {
    const rows = getColRows(optionList, indexes)

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const optionItem = optionList[i]

      if (row.value === values[valueIndex]) {
        if (row.hasChildren && values[valueIndex + 1]) {
          // 都有下一项
          addData(optionItem)
          return deep(optionItem.children, valueIndex + 1, [...indexes, i])
        } else if (!row.hasChildren && valueIndex + 1 >= values.length) {
          // 都没有下一项，匹配正确
          addData(optionItem)
          return true
        } else {
          return false
        }
      }
    }

    return false
  }

  function virtualOptionsDeep(
    index: number,
    valueIndex: number,
    parent?: ColRow
  ): boolean {
    function row2OptionItem(row: ColRow) {
      return {
        label: row.label,
        value: row.value,
        children: [],
        disabled: false
      }
    }

    const rows = (virtualHandler as PickerOptionsHandler)(index, parent)

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const optionItem = row2OptionItem(row)

      if (row.value === values[valueIndex]) {
        // 之前value[valueIndex + 1] 没有考虑0的情况
        if (row.hasChildren && valueIndex + 1 < values.length) {
          // 都有下一项
          addData(optionItem)
          return virtualOptionsDeep(index + 1, valueIndex + 1, row)
        } else if (!row.hasChildren && valueIndex + 1 >= values.length) {
          // 都没有下一项，匹配正确
          addData(optionItem)
          return true
        } else {
          return false
        }
      }
    }

    return false
  }

  return (virtualHandler ? virtualOptionsDeep(0, 0) : deep(options, 0, []))
    ? {
        valid: true,
        value,
        label
      }
    : {
        valid: false,
        value: [],
        label: []
      }
}

function printError(message: string) {
  console.error(
    new Exception(
      message,
      Exception.TYPE.PROP_ERROR,
      'Picker/DatePicker/Cascader/Calendar'
    )
  )
}

/**
 * 校验值
 * @param values 值
 * @param options
 * @param separator
 * @param isCascade
 * @param virtualHandler
 * @returns { valid, detail }
 */
export function validateValues(
  values: SelectorValue[] | Error,
  options: OptionItem[] | OptionItem[][],
  isCascade: boolean,
  virtualHandler?: PickerOptionsHandler | null
): ValidateReturn {
  let valid = false

  if (values instanceof Error) {
    printError(values.message)
  } else if (values.length === 0) {
    // 空数组也算符合
    valid = true
  } else {
    const ret = isCascade
      ? validateCascadeCols(values, options as OptionItem[], virtualHandler)
      : validateCols(values, options)
    if (!ret.valid) {
      printError('The value is not in "options".')
    } else {
      return ret
    }
  }

  return {
    valid,
    value: [],
    label: []
  }
}

export function getFormatOptions(
  options: UserOptionItem[],
  fieldNames: UserFieldNames,
  virtualHandler: PickerOptionsHandler | null | undefined,
  cascader = false
) {
  const newFieldNames = getDefaultFieldNames()

  let newOptions: OptionItem[] | OptionItem[][] = []
  let isCascade = false

  if (virtualHandler == null) {
    if (fieldNames) {
      typeof fieldNames.label === 'string' &&
        fieldNames.label &&
        (newFieldNames.label = fieldNames.label)
      typeof fieldNames.value === 'string' &&
        fieldNames.value &&
        (newFieldNames.value = fieldNames.value)
      typeof fieldNames.children === 'string' &&
        fieldNames.children &&
        (newFieldNames.children = fieldNames.children)
    }

    newOptions = parseOptions(options, newFieldNames)

    // 判断是否级联模式
    if (cascader) {
      // 级联选择器下强制级联模式
      isCascade = true
    } else {
      for (let i = 0; i < newOptions.length; i++) {
        const newOption = newOptions[i] as OptionItem

        if (newOption.children && newOption.children[0]) {
          isCascade = true
          break
        }
      }
    }
  } else {
    isCascade = true
  }

  return {
    options: newOptions,
    isCascade,
    fieldNames: newFieldNames
  }
}
