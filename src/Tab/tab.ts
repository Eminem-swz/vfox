import type { PropType } from 'vue'
import { isArray, isObject, isString, isStringNumberMix } from '@/helpers/util'
import type { OptionItem, OptionList } from './types'

export const tabEmits = ['update:activeValue', 'change']

export const tabProps = {
  options: {
    type: Array as PropType<OptionList>,
    validator: (val: OptionList) => {
      if (isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const option = val[i]

          if (isStringNumberMix(option)) {
            //
          } else if (
            isObject(option) &&
            isStringNumberMix((option as OptionItem).value) &&
            isString((option as OptionItem).label)
          ) {
            //
          } else {
            return false
          }
        }
      } else {
        return false
      }

      return true
    },
    required: true,
    default: () => [] as OptionItem[]
  },
  activeValue: {
    type: [String, Number],
    default: null
  },
  color: {
    type: String
  },
  activeColor: {
    type: String
  }
}
