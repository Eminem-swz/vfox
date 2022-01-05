import type { Noop } from '../helpers/types'
import Exception from '../helpers/exception'

export interface ApiOptionsSuccess {
  (...args: any[]): void
}

export interface ApiOptionsFail {
  (e: Exception): void
}

export type ApiOptionsComplete = Noop
