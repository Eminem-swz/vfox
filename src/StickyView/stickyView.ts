import type { VoidFnToBooleanFn } from '../helpers/types'
import type { OnChange } from './types'

export const emitChangeValidator: VoidFnToBooleanFn<OnChange> = payload =>
  payload && typeof payload.activeIndex === 'number'
