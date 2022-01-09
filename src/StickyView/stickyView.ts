import type { StickyViewChangeArgs } from './types'

export const emitChangeValidator = (payload: StickyViewChangeArgs) =>
  payload && typeof payload.activeIndex === 'number'
