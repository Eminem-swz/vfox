import type { PropType } from 'vue'
import type { UserOptionItem } from './types'
import { formItemProps } from '@/Form/form'
import { colorValidator } from '@/helpers/validator'

export const checkboxOrRadioGroupProps = {
  ...formItemProps,
  options: {
    type: Array as PropType<UserOptionItem[]>,
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

export const checkboxOrRadioEmits = {
  'update:checked': (checked: boolean) => typeof checked === 'boolean',
  change: (checked: boolean) => typeof checked === 'boolean'
}

export const checkboxOrRadioProps = {
  value: {
    type: [Number, String],
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    validator: colorValidator
  },
  name: {
    type: String,
    default: ''
  }
}
