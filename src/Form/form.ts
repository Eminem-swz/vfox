export const formItemEmits = ['update:modelValue', 'change', 'reset']

export const formItemProps = {
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
