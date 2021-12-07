import type { PropType } from 'vue'
import { getDefaultFieldNames } from '@/Picker/util'
import type { UserFieldNames, UserOptionItem } from './types'
import { stringNumberArrayMixValidator } from '@/helpers/validator'

export const commonProps = {
  modelValue: {
    type: [String, Number, Array],
    validator: stringNumberArrayMixValidator,
    default: () => ''
  },
  formatString: {
    type: Boolean,
    default: false
  },
  initialSeparator: {
    type: [String, Function],
    default: '/'
  },
  options: {
    type: Array,
    default: () => [] as UserOptionItem[]
  },
  fieldNames: {
    type: Object as PropType<UserFieldNames>,
    default: getDefaultFieldNames
  },
  handlers: {
    type: Object,
    default: null
  }
}

export const pickerProps = {
  placeholder: {
    type: String,
    default: ''
  }
}

export const pickerEmits = ['value-change']

export const pickerPopupProps = {
  title: {
    type: String,
    default: ''
  }
}

export const pickerViewEmits = ['change', 'update:modelValue']
