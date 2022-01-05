import type { Noop, TypeException } from '../helpers/types'

export interface ApiOptionsSuccess {
  (...args: any[]): void
}

export interface ApiOptionsFail {
  (e: TypeException): void
}

export type ApiOptionsComplete = Noop
