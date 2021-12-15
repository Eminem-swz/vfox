import { AnyObject, Noop } from '../helpers/types'
import Exception from '../helpers/exception'

export interface ApiOptionsSuccess {
  (...args: any[]): void
}

export interface ApiOptionsFail {
  (e: Exception): void
}

export type ApiOptionsComplete = Noop

export interface ApiFnOptions {
  success: ApiOptionsSuccess
  fail: ApiOptionsFail
  complete: ApiOptionsComplete
}

export type PopupHook = (hookEvent: string, args: any) => void

export interface PopupSuccessConfirmArgs<T = AnyObject> {
  confirm: boolean
  cancel: boolean
  detail: T
  source: string
}
