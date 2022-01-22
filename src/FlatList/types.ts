import type { ViewPosition } from '../helpers/types'

export type OnEndReached = (payload: { distanceFromEnd: number }) => void

export interface ScrollToIndexOptions {
  index: number
  animated?: boolean
  viewPosition?: ViewPosition
}

export type OnVisibleItemsChange = (payload: {
  items: {
    index: number
    visible: boolean
  }[]
}) => void
