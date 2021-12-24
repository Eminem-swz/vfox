import type { BadgeOptions } from '../Badge/types'
import type { IconData } from '../Icon/types'

export type OptionValue = number | string

export interface TabOptionItem {
  label: string
  value: OptionValue
  icon?: IconData
  iconLink?: string
  activeIcon?: IconData
  activeIconLink?: string
  badge?: BadgeOptions | number | string
  subLabel?: string
}

export type OptionList = (OptionValue | TabOptionItem)[]

export interface HandleOptionItem extends TabOptionItem {
  badge: BadgeOptions
}
