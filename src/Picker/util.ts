import type { PickerDetail, PickerModelValue } from './types'
import {
  cloneData,
  isArray,
  isDate,
  isDateArray,
  isSameArray,
  isSameDate
} from '@/helpers/util'

export function updateArray(array: any[], newArray: any[]) {
  array.splice(0, Infinity, ...newArray)
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

export function cloneValue(value: PickerModelValue) {
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

export function cloneDetail<T extends PickerDetail>(detail: T) {
  const newDetail = cloneData(detail)
  newDetail.value = cloneValue(detail.value)

  return newDetail
}
