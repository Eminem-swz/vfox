import type { BadgeOptions } from '../Badge/types'

export type OptionValue = number | string

export interface OptionItem {
  label: string
  value: OptionValue
  icon?: any
  iconLink?: string
  activeIcon?: any
  activeIconLink?: string
  badge?: BadgeOptions | number | string
  subLabel?: string
}

export type OptionList = (OptionValue | OptionItem)[]

export interface HandleOptionItem extends OptionItem {
  badge: BadgeOptions
}
