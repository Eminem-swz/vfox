import type { ViewPosition } from '../helpers/types'

export type OnEndReached = (payload: { distanceFromEnd: number }) => void

export type OnRecycleChange = (payload: {
  recycled: boolean
  index: number
  item: any
}) => void

export interface ScrollToIndexOptions {
  index: number
  animated?: boolean
  viewPosition?: ViewPosition
}
