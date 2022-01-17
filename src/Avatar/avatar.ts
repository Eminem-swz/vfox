import { isNumber } from '@/helpers/util'
import { getEnumsValue } from '@/helpers/validator'
import type { PropType } from 'vue'
import type { ShapeType, SizeType, UserSizeType } from './types'

const SIZE_TYPES: SizeType[] = ['middle', 'large', 'small']

export const avatarProps = {
  size: {
    type: [Number, String] as PropType<UserSizeType>,
    default: SIZE_TYPES[0]
  }
}

export const AVATAR_SHAPE_TYPES: ShapeType[] = ['circle', 'square']

export function getAvatarSize(size: UserSizeType): UserSizeType {
  if (isNumber(size)) {
    return size as number
  }

  return getEnumsValue(SIZE_TYPES, size)
}
