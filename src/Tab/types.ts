import type { BadgeOptions } from '../Badge/types'
import type { IconData } from '../Icon/types'

export interface OptionItem {
  label: string
  value: number | string
  icon?: IconData
  iconLink?: string
  activeIcon?: IconData
  activeIconLink?: string
  badge?: BadgeOptions | number | string
  subLabel?: string
}

export type OptionList = (number | string | OptionItem)[]

export interface HandleOptionItem extends OptionItem {
  badge: BadgeOptions
}

export type OnChange = (payload: {
  index: number
  value: number | string
}) => void
