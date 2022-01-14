import type { IconData } from '../Icon/types'

export interface MenuOption {
  name: string
  icon?: IconData
  disabled?: boolean
}

export interface MenuDetail {
  item: {
    name: string
  }
  index: number
}

export type MenuOnConfirm = (payload: MenuDetail) => void
