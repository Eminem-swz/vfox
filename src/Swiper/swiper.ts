import type { SwiperChangeArgs } from './types'

export const emitChangeValidator = (payload: SwiperChangeArgs) =>
  payload &&
  typeof payload.activeIndex === 'number' &&
  typeof payload.fromIndex === 'number'
