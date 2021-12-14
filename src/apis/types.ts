import { DataObject, EmptyObject } from '../helpers/types'
import Exception from '../helpers/exception'

export interface ApiOptionsSuccess {
  (...args: any[]): void
}

export interface ApiOptionsFail {
  (e: Exception): void
}

export interface ApiOptionsComplete {
  (): void
}

export interface ApiFnOptions {
  success: ApiOptionsSuccess
  fail: ApiOptionsFail
  complete: ApiOptionsComplete
}

export type PopupHook = (hookEvent: string, args: any) => void

export interface PopupConfirmArgs<T = DataObject> {
  confirm: boolean
  cancel: boolean
  detail: T
}
