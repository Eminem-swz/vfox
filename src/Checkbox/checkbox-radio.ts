import type { UserOptionItem } from './types'

export const checkboxOrRadioGroupProps = {
  options: {
    type: Array,
    default: () => [] as UserOptionItem[]
  },
  inline: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  }
}
export const checkboxOrRadioEmits = ['update:checked', 'change']
