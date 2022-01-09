import type { Noop } from '../helpers/types'
import type { ScrollViewOnScrollArgs, ScrollViewPullDirection } from './types'

export const emitScrollValidator = (payload: ScrollViewOnScrollArgs) =>
  payload &&
  typeof payload.scrollTop === 'number' &&
  typeof payload.scrollLeft === 'number'

export const emitRefreshingValidator = (
  payload: {
    pullDirection: ScrollViewPullDirection
  },
  loadComplete: Noop
) =>
  payload &&
  typeof payload.pullDirection === 'string' &&
  typeof loadComplete === 'function'
