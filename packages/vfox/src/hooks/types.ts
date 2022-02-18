import type { ExtractPropTypes } from 'vue'
import type { AnyObject, UnionToIntersection } from '../helpers/types'

export type UseProps<T = AnyObject> = Readonly<ExtractPropTypes<T>>

export type UseEmitFn<
  Options,
  Event extends keyof Options = keyof Options
> = UnionToIntersection<
  {
    [key in Event]: Options[key] extends (...args: infer Args) => any
      ? (event: key, ...args: Args) => void
      : (event: key, ...args: any[]) => void
  }[Event]
>
