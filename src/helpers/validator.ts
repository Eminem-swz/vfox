import {
  isString,
  inArray,
  isObject,
  isHTMLElement,
  isStringNumberMixArray,
  isNumber,
  isFunction,
  isURL
} from '@/helpers/util'
import { getSizeValue } from '@/helpers/dom'
import type { AnyObject, TypeException, Validator } from './types'
import { isColorValue } from '@/helpers/color'
import Exception from '@/helpers/exception'

export const selectorValidator: Validator = value => {
  return isString(value) || isHTMLElement(value) || value === document
}

export const stringNumberArrayMixValidator: Validator = value => {
  return isStringNumberMixArray(value) || isString(value) || isNumber(value)
}

export const sizeValidator: Validator = value => {
  return getSizeValue(value, Infinity) !== Infinity
}

export const createEnumsValidator = (enums: string[]) => {
  const validator: Validator = function (value) {
    return inArray(value, enums)
  }

  return validator
}

export function getEnumsValue<T = string>(enums: T[], value?: unknown): T {
  return inArray(value, enums) ? (value as T) : enums[0]
}

/**
 * 判断是否svg组件
 * @param value 值
 */
export function isSvgComponent(value: unknown) {
  if (isObject(value)) {
    const obj = value as AnyObject

    if (isString(obj.template) || isFunction(obj.render)) {
      // vue component
      return true
    } else if (obj.__file && obj.__file.indexOf('.svg') > -1) {
      // vue-svg-loader
      return true
    }
  }

  return false
}

export const iconValidator: Validator = value => {
  return (isString(value) && !isURL(value)) || isSvgComponent(value)
}

export const colorValidator: Validator = value => {
  return value == null || value === '' || isColorValue(value as string)
}

export const emitEventValidator = (e: Event) => e instanceof Event

export const emitErrorValidator = (e: TypeException) => e instanceof Exception

export const emitTypeValidator = (payload: { type: string }) =>
  payload && typeof payload.type === 'string'

export const createListValidator = <T>(itemValidator: (item: T) => boolean) => {
  const validator = (value: unknown) => {
    if (Array.isArray(value)) {
      return (
        value.filter(v => {
          return !itemValidator(v as T)
        }).length === 0
      )
    }
    return false
  }

  return validator as (payload: T[]) => boolean
}
