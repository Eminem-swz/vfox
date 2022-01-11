import type { PopupCancelArgs } from '../popup/types'
import type { IconData } from '../Icon/types'

export interface PopMenuOption {
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

export type PopMenuConfirmArgs = PopMenuDetail
export type PopMenuCancelArgs = PopupCancelArgs
