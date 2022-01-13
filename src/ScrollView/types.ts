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
