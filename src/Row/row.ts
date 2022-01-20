import type { PropType } from 'vue'
import { isNumberArray, isNumeric } from '../helpers/util'

export const propGutter = {
  type: [Number, String, Array] as PropType<number | string | number[]>,
  validator: (val: number | string | number[]) => {
    if (isNumberArray(val) && (val as number[]).length === 2) {
      return true
    } else if (isNumeric(val)) {
      return true
    }

    return false
  },
  default: 0
}

export const parseGutter = (val?: number | string | number[]) => {
  if (isNumeric(val)) {
    return [Math.max(0, parseFloat(val as string)), 0]
  } else if (isNumberArray(val) && (val as number[]).length >= 2) {
    return [(val as number[])[0], (val as number[])[1]]
  }
  return [0, 0]
}
