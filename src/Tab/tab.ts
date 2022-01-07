import type { PropType } from 'vue'
import { isArray, isObject, isString, isStringNumberMix } from '@/helpers/util'
import type { TabOptionItem, OptionList, OptionValue } from './types'

// export const tabEmits = ['update:activeValue', 'change']
export const tabEmits = {
  'update:activeValue': (payload: OptionValue) => isStringNumberMix(payload),
  change: (payload: { type: 'change'; index: number; value: OptionValue }) =>
    payload &&
    payload.type &&
    typeof payload.index === 'number' &&
    isStringNumberMix(payload.value)
}

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
            isStringNumberMix((option as TabOptionItem).value) &&
            isString((option as TabOptionItem).label)
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
    default: () => [] as TabOptionItem[]
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
