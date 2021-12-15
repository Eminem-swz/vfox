import type { AnyObject, EmptyObject } from '../helpers/types'

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
  type: 'visible-state-change'
  state: PopupVisibleState
}
export type PopupConfirmArgs<T = EmptyObject> = T & {
  type: 'confirm'
}
export interface PopupCancelArgs {
  type: 'cancel'
  source: string
}

export interface PopupBridge {
  in?: (key: string, value?: any) => void
  out?: (key: string, value: any) => void
}
export type PopupHook = (hookEvent: string, args: any) => void

export interface PopupSuccessConfirmArgs<T = AnyObject> {
  confirm: boolean
  cancel: boolean
  detail: T
  source: string
}

export type PopupSuccessAlertArgs = EmptyObject
