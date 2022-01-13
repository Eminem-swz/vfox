import type { EmptyObject } from '../helpers/types'
import type { IconData } from '../Icon/types'

export type DialogConfirmArgs = EmptyObject

export interface MenuOption {
  name: string
  icon?: IconData
  disabled?: boolean
}

export interface PopMenuDetail {
  item: {
    name: string
  }
  index: number
}

export type MenuConfirmArgs = PopMenuDetail
