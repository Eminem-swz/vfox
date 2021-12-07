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

export const popupEmits = [
  'visible-state-change',
  'update:visible',
  'cancel',
  'confirm'
]

export const popupExtendEmits = [
  'confirm',
  'cancel',
  'visible-state-change',
  'update:visible'
]

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}
