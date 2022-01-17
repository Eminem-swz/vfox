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
export type VisibleState = 'show' | 'shown' | 'hide' | 'hidden'
export type OnVisibleStateChange = (payload: { state: VisibleState }) => void
export type CancelArgs = { source: string }
export type OnCancel = (payload: { source: string }) => void

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
