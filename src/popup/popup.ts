import { inArray } from '@/helpers/util'
import type { AnyObject } from '../helpers/types'
import type {
  PopupCancelArgs,
  PopupConfirmArgs,
  PopupVisibleStateChangeArgs
} from './types'

const VISIBLE_STATE_TYPES = ['show', 'shown', 'hide', 'hidden']

export const popupProps = {
  visible: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  }
}

export const popupEmits = {
  'visible-state-change': (payload: PopupVisibleStateChangeArgs) =>
    payload && inArray(payload.state, VISIBLE_STATE_TYPES),
  'update:visible': (visible: boolean) => typeof visible === 'boolean',
  cancel: (payload: PopupCancelArgs) =>
    payload && typeof payload.source === 'string',
  confirm: (payload: PopupConfirmArgs<AnyObject>) => !!payload
}

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}
