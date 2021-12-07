import type { PropType } from 'vue'
import { cloneData, isDate, isArray } from '@/helpers/util'
import dayjs from '@/helpers/day'
import type { DayHandler, CalendarMode, DetailObject } from './types'
import { isInNumberRange, isInteger } from '@/helpers/util'
import {
  calendarValueValidator,
  createEnumsValidator
} from '@/helpers/validator'

export const DEFAULT_MONTH_RANGE = 6
export const MODE_NAMES: CalendarMode[] = ['single', 'range']

export function getDefaultDetail(): DetailObject {
  return {
    value: [],
    valueArray: [],
    formatted: '',
    rangeCount: 0
  }
}

export function cloneDetail(detail: DetailObject) {
  const newDetail = cloneData(detail)

  newDetail.value.forEach((v, k) => {
    newDetail.value[k] = cloneDate(v)
  })
  return newDetail
}

export function cloneDate(date: Date) {
  return dayjs(date).toDate()
}

export function isSameDateArray(a: Date[], b: Date[]) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (
        !(isDate(a[i]) && isDate(b[i]) && a[i].getTime() === b[i].getTime())
      ) {
        return false
      }
    }
  } else {
    return false
  }

  return true
}

export function parseValues(val: unknown, mode: CalendarMode) {
  const values: number[] = []

  if (val == null || val === 0 || val === '') {
    return values
  }

  if (isArray(val)) {
    const s = (val as string[])[0]
    const e = (val as string[])[1]

    if (s != null && dayjs(s).isValid()) {
      values.push(dayjs(s).startOf('day').valueOf())
    }
    if (e != null && dayjs(e).isValid()) {
      values.push(dayjs(e).startOf('day').valueOf())
    }
  } else if (dayjs(val as string).isValid()) {
    values.push(
      dayjs(val as string)
        .startOf('day')
        .valueOf()
    )
  }

  if (values[0] && (!values[1] || values[1] < values[0])) {
    values[1] = dayjs(values[0]).add(1, 'day').valueOf()
  }

  if (values.length > 0 && mode !== 'range') {
    values[1] = 0
  }
  return values
}

export function getDetail(timeArray: number[], mode: CalendarMode) {
  const detail = getDefaultDetail()
  const start = timeArray[0]
  const end = timeArray[1]

  if (start) {
    const startDjs = dayjs(start)

    if (mode === 'range') {
      if (start && end) {
        const endDjs = dayjs(end)

        detail.value.push(startDjs.toDate())
        detail.value.push(endDjs.toDate())
        detail.valueArray.push(startDjs.toArray().slice(0, 3))
        detail.valueArray.push(endDjs.toArray().slice(0, 3))

        if (start === end) {
          detail.formatted = startDjs.format('YYYY-MM-DD')
        } else {
          detail.formatted = [
            startDjs.format('MM-DD'),
            endDjs.format('MM-DD')
          ].join(' ~ ')
        }

        detail.rangeCount = Math.floor((end - start) / (24 * 3600 * 1000)) + 1
      }
    } else {
      detail.value.push(startDjs.toDate())
      detail.valueArray.push(startDjs.toArray().slice(0, 3))
      detail.formatted = startDjs.format('YYYY-MM-DD')
      detail.rangeCount = 1
    }
  }

  return detail
}

export const commonProps = {
  modelValue: {
    type: [String, Number, Date, Array],
    validator: calendarValueValidator,
    default: () => [] as Date[]
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
  }
}
