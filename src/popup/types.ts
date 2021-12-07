import type { AnyObject } from '../helpers/types'

export interface PopupCustomCancel {
  (key: string, focus?: boolean): void
}
export interface PopupCustomConfirm {
  (detail: AnyObject): void
}
export type PopupStyles = Partial<{
  zIndex: number
  top: string
  position: 'absolute'
}>
export type PopupVisibleState = 'show' | 'shown' | 'hide' | 'hidden'
export interface PopupVisibleStateChangeArgs {
  type: string
  state: PopupVisibleState
}
export interface PopupBridge {
  in?: (key: string, value?: any) => void
  out?: (key: string, value: any) => void
}
