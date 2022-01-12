import type { PopupCancelArgs, PopupVisibleStateChangeArgs } from './types'

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
    payload && VISIBLE_STATE_TYPES.includes(payload.state),
  'update:visible': (visible: boolean) => typeof visible === 'boolean',
  cancel: (payload: PopupCancelArgs) =>
    payload && typeof payload.source === 'string',
  confirm: (payload: any) => !!payload
}

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}
