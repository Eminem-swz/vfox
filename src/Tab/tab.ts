import type { PropType } from 'vue'
import { isStringNumberMix } from '@/helpers/util'
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
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const option = val[i]

          if (typeof option === 'string' || typeof option === 'number') {
            //
          } else if (
            option &&
            typeof option.label === 'string' &&
            isStringNumberMix(option.value)
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
    type: [Number, String] as PropType<OptionValue>
  },
  color: {
    type: String
  },
  activeColor: {
    type: String
  }
}
