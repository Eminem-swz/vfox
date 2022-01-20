import type { PropType } from 'vue'
import { isStringNumberMix } from '../helpers/util'
import type { OptionItem, OptionList, OnChange } from './types'
import { colorValidator } from '../helpers/validator'
import type { VoidFnToBooleanFn } from '../helpers/types'

export const tabEmits: {
  'update:activeValue': (payload: number | string) => boolean
  change: VoidFnToBooleanFn<OnChange>
} = {
  'update:activeValue': payload => isStringNumberMix(payload),
  change: payload =>
    payload &&
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
    default: () => [] as OptionItem[]
  },
  activeValue: {
    type: [Number, String] as PropType<number | string>
  },
  color: {
    type: String,
    validator: colorValidator
  },
  activeColor: {
    type: String,
    validator: colorValidator
  }
}
