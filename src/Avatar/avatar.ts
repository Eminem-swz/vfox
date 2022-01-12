import { isNumber } from '@/helpers/util'
import { getEnumsValue } from '@/helpers/validator'
import type { PropType } from 'vue'
import type { AvatarShapeType } from './types'

type SizeType = 'middle' | 'large' | 'small'
const SIZE_TYPES = ['middle', 'large', 'small']

export const avatarProps = {
  size: {
    type: [String, Number] as PropType<SizeType | number>,
    default: SIZE_TYPES[0]
  }
}

export const AVATAR_SHAPE_TYPES: AvatarShapeType[] = ['circle', 'square']

export function getAvatarSize(size: number | string) {
  if (isNumber(size)) {
    return size as number
  }

  return getEnumsValue(SIZE_TYPES, size)
}
