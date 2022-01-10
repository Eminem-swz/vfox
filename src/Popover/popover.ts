import type { PropType } from 'vue'
import {
  selectorValidator,
  createEnumsValidator,
  getEnumsValue
} from '@/helpers/validator'
import { PLACEMENT_TYPES } from '@/helpers/constants'
import { popupEmits, popupProps } from '@/popup/popup'
import type { PlacementType } from '../helpers/types'

export const popoverProps = {
  ...popupProps,
  selector: {
    type: [String, Object],
    validator: selectorValidator,
    required: true
  },
  placement: {
    type: String as PropType<PlacementType>,
    validator: createEnumsValidator(PLACEMENT_TYPES),
    default: getEnumsValue(PLACEMENT_TYPES)
  },
  showMask: {
    type: Boolean,
    default: true
  }
}

export const popoverEmits = { ...popupEmits }
