import { isObject, isStringNumberMix } from '@/helpers/util'
import type { BadgeOptions } from './types'

export function handleBadge(
  badge: number | string | BadgeOptions | undefined | null
): BadgeOptions {
  if (isStringNumberMix(badge)) {
    return {
      content: badge as string
    }
  } else if (isObject(badge)) {
    return badge as BadgeOptions
  } else {
    return {}
  }
}
