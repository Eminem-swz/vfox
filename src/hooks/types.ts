import type { SetupContext } from 'vue'
import type { AnyObject } from '../helpers/types'

export type UseProps = Readonly<AnyObject>
export type UseCtx = SetupContext<string[]>

export interface UseEmit {
  (event: string, ...args: any[]): void
}

export interface EmitObject {
  [propName: string]:
    | boolean
    | number
    | string
    | Date
    | (boolean | number | string | Date)[]
}
