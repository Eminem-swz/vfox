import type { PropType } from 'vue'
import { isInNumberRange, isInteger } from '@/helpers/util'
import dayjs from '@/helpers/day'
import type {
  DayHandler,
  CalendarMode,
  CalendarValueFormatter,
  CalendarValueParser,
  CalendarOriginalDetail,
  CalendarDetail
} from './types'
import { createEnumsValidator } from '@/helpers/validator'
import Exception from '@/helpers/exception'
import { isPickerDetail } from '@/Picker/picker'

export const DEFAULT_MONTH_RANGE = 6
export const MODE_NAMES: CalendarMode[] = ['single', 'range']

export function getDefaultDetail(): CalendarOriginalDetail {
  return {
    value: [],
    valueArray: [],
    label: '',
    rangeCount: 0
  }
}

export const commonProps = {
  modelValue: {
    type: [Date, String, Number, Array],
    default: null
  },
  minDate: {
    type: Date,
    default: () => dayjs().startOf('day').toDate()
  },
  maxDate: {
    type: Date,
    default: () =>
      dayjs().startOf('day').add(DEFAULT_MONTH_RANGE, 'month').toDate()
  },
  initialMode: {
    type: String as PropType<CalendarMode>,
    validator: createEnumsValidator(MODE_NAMES),
    default: MODE_NAMES[0]
  },
  allowSameDay: {
    type: Boolean,
    default: false
  },
  maxRange: {
    type: Number,
    default: Infinity
  },
  dayHandler: {
    type: Function as PropType<DayHandler>,
    default: null
  },
  firstDayOfWeek: {
    validator: (val: number) => {
      return isInteger(val) && isInNumberRange(val, 0, 6)
    },
    default: 0
  },
  formatter: {
    type: Function as PropType<CalendarValueFormatter>
  },
  parser: {
    type: Function as PropType<CalendarValueParser>
  }
}

export function printError(message: string) {
  console.error(new Exception(message, Exception.TYPE.PROP_ERROR, 'Calendar'))
}

export const isCalendarDetail = (detail: CalendarDetail) =>
  isPickerDetail(detail) &&
  typeof detail.rangeCount === 'number' &&
  Array.isArray(detail.valueArray)
