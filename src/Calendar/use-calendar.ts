import dayjs from '@/helpers/day'
import { isArray } from '@/helpers/util'
import { getDefaultDetail } from '@/Calendar/calendar'
import type { UseProps } from '../hooks/types'
import type {
  PickerDetail,
  PickerModelValue,
  PickerValue
} from '../Picker/types'
import type {
  DayHandler,
  CalendarMode,
  CalendarDetail,
  CalendarFormatter,
  CalendarParser
} from './types'

function valueParser(val: unknown, mode: CalendarMode) {
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

function detailFormatter(timeArray: number[], mode: CalendarMode) {
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
          detail.label = startDjs.format('YYYY-MM-DD')
        } else {
          detail.label = [
            startDjs.format('MM-DD'),
            endDjs.format('MM-DD')
          ].join(' ~ ')
        }

        detail.rangeCount = Math.floor((end - start) / (24 * 3600 * 1000)) + 1
      }
    } else {
      detail.value.push(startDjs.toDate())
      detail.valueArray.push(startDjs.toArray().slice(0, 3))
      detail.label = startDjs.format('YYYY-MM-DD')
      detail.rangeCount = 1
    }
  }

  return detail
}

export function useHandlers(
  props: UseProps & {
    parser?: CalendarParser
    formatter?: CalendarFormatter
  },
  {
    mode
  }: {
    mode: CalendarMode
  }
) {
  const parser = function (val: unknown) {
    if (props.parser) {
      return props.parser(val, mode).map((d: Date) => {
        return d.getTime()
      })
    }
    return valueParser(val, mode)
  }

  const formatter = function (valueArray: number[]) {
    const detail: CalendarDetail = detailFormatter(valueArray, mode)

    if (props.formatter) {
      const ret = props.formatter(
        valueArray.map(v => new Date(v)),
        mode
      )

      if ((ret as PickerDetail)?.label) {
        detail.label = (ret as PickerDetail).label
        detail.value = (ret as PickerDetail).value
      } else {
        detail.value = ret as PickerModelValue
      }
    }

    return detail
  }

  return {
    parser,
    formatter
  }
}
