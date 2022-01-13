import type { OnCancel, OnVisibleStateChange } from './types'

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

export const popupEmits: {
  'visible-state-change': OnVisibleStateChange
  'update:visible': (visible: boolean) => boolean
  cancel: OnCancel
  confirm: (payload: any) => boolean
} = {
  'visible-state-change': payload =>
    payload && VISIBLE_STATE_TYPES.includes(payload.state),
  'update:visible': visible => typeof visible === 'boolean',
  cancel: payload => payload && typeof payload.source === 'string',
  confirm: payload => !!payload
}

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}
