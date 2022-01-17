import type { BadgeOption, Option as HandleBadgeOption } from '../Badge/types'
import type { IconData } from '../Icon/types'

export interface OptionItem {
  label: string
  value: number | string
  icon?: string | IconData
  activeIcon?: string | IconData
  badge?: BadgeOption
  subLabel?: string
}

export type OptionList = (number | string | OptionItem)[]

export interface HandleOptionItem extends OptionItem {
  badge?: HandleBadgeOption
  iconLink?: string
  activeIconLink?: string
}

export type OnChange = (payload: {
  index: number
  value: number | string
}) => void
