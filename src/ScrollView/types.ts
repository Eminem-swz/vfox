export type PullDirection = 'up' | 'right' | 'down' | 'left'

export type OnScroll = (payload: {
  scrollTop: number
  scrollLeft: number
  scrollWidth: number
  scrollHeight: number
  clientHeight: number
  clientWidth: number
}) => void

export type OnRefreshing = (
  payload: {
    pullDirection: PullDirection
  },
  loadComplete: () => void
) => void

export type OnScrollToUpper = (payload: { direction: 'top' | 'left' }) => void
export type OnScrollToLower = (payload: {
  direction: 'bottom' | 'right'
}) => void

export interface ScrollToOptions {
  offset: number
  animated?: boolean
}
