import type { AnyObject, EmptyObject } from '../helpers/types'

export interface PopupCustomCancel {
  (key: string, focus?: boolean): void
}
export interface PopupCustomConfirm<T = AnyObject> {
  (detail: T): void
}
export type PopupStyles = Partial<{
  zIndex: number
  top: string
  position: 'absolute'
}>
export type PopupVisibleState = 'show' | 'shown' | 'hide' | 'hidden'
export interface PopupVisibleStateChangeArgs {
  state: PopupVisibleState
}
export type PopupConfirmArgs = any

export interface PopupCancelArgs {
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
