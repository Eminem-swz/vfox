import type { VoidFnToBooleanFn } from '../helpers/types'
import type { OnRefreshing, OnScroll } from './types'

export const emitScrollValidator: VoidFnToBooleanFn<OnScroll> = payload =>
  payload &&
  typeof payload.scrollTop === 'number' &&
  typeof payload.scrollLeft === 'number'

export const emitRefreshingValidator: VoidFnToBooleanFn<OnRefreshing> = (
  payload,
  loadComplete
) =>
  payload &&
  typeof payload.pullDirection === 'string' &&
  typeof loadComplete === 'function'
