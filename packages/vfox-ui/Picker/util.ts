import type { SelectorModelValue, SelectorDetail } from '../SelectorField/types'

import {
  cloneData,
  isDateArray,
  isSameArray,
  isSameDate
} from '../helpers/util'

export function isSameValue(aVal: unknown, bVal: unknown) {
  if (Array.isArray(aVal) && Array.isArray(bVal)) {
    return isSameArray(aVal, bVal)
  }

  if (aVal instanceof Date && bVal instanceof Date) {
    return isSameDate(aVal, bVal)
  }

  return aVal === bVal
}

export function isSameDetail(a: SelectorDetail, b: SelectorDetail) {
  return isSameValue(a.value, b.value)
}

export function cloneValue(value: SelectorModelValue) {
  if (value instanceof Date) {
    return new Date(value)
  } else if (isDateArray(value)) {
    const newValue: Date[] = []
    ;(value as Date[]).forEach(date => {
      newValue.push(new Date(date))
    })
    return newValue
  }

  return cloneData(value)
}

export function cloneDetail<T extends SelectorDetail>(detail: T) {
  const newDetail = cloneData(detail)
  newDetail.value = cloneValue(detail.value)

  return newDetail
}
