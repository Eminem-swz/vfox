import { DataObject } from '../helpers/types'
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

export interface ApiOptions {
  success?: ApiOptionsSuccess
  fail?: ApiOptionsFail
  complete?: ApiOptionsComplete
}

export type PopupHook = (hookEvent: string, args: any) => void

export interface PopupBridge {
  in?: (key: string, value?: any) => void
  out?: (key: string, value: any) => void
}

export interface PopupConfirmArgs {
  confirm?: boolean
  cancel?: boolean
  detail?: DataObject
}
