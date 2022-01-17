import { isObject, isStringNumberMix } from '@/helpers/util'
import type { BadgeOption, Option } from './types'

export function handleBadge(badge?: BadgeOption): Option {
  if (isStringNumberMix(badge)) {
    return {
      content: badge as string
    }
  } else if (isObject(badge)) {
    return badge as Option
  } else {
    return {}
  }
}
