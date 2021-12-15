import type { BadgeOptions } from '../Badge/types'
import type { IconData } from '../Icon/types'

export type OptionValue = number | string

export interface OptionItem {
  label: string
  value: OptionValue
  icon?: IconData
  iconLink?: string
  activeIcon?: IconData
  activeIconLink?: string
  badge?: BadgeOptions | number | string
  subLabel?: string
}

export type OptionList = (OptionValue | OptionItem)[]

export interface HandleOptionItem extends OptionItem {
  badge: BadgeOptions
}
