import type { PopupCancelArgs } from '../popup/types'

export interface ActionSheetOption {
  name: string
  highlight?: boolean
  description?: string
  disabled?: boolean
}

export interface ActionSheetDetail {
  item: {
    name: string
  }
  index: number
}

export type ActionSheetConfirmArgs = ActionSheetDetail
export type ActionSheetCancelArgs = PopupCancelArgs
