import { provide } from 'vue'
import dayjs from '@/helpers/day'
import type { Dayjs } from 'dayjs'
import { getEnumsValue } from '@/helpers/validator'
import type {
  OptionsHandler,
  ValueParser,
  LabelFormatter,
  ValueFormatter,
  PickerHandlers
} from '../Picker/types'
import type { UseProps } from '../hooks/types'
import {
  array2Date,
  day2Array,
  getFormatTemplate,
  MODE_NAMES,
  parseRows
} from '@/DatePicker/date'
import { isDate, isString, rangeNumber } from '@/helpers/util'

export function useHandlers(props: UseProps) {
  const mode = getEnumsValue(MODE_NAMES, props.initialMode)

  const optionsHandler: OptionsHandler = (index, parent) => {
    let minDate = props.minDate as Date
    let maxDate = props.maxDate as Date
    if (minDate.getTime() > maxDate.getTime()) {
      // 兼容min max搞反的问题
      maxDate = [minDate, (minDate = maxDate)][0]
    }

    return parseRows(index, parent || null, {
      filter: props.filter,
      minDate,
      maxDate,
      mode
    })
  }

  const parser: ValueParser = value => {
    if (props.parser) {
      return props.parser(value)
    }

    let djs: Dayjs | null = null

    if (isDate(value)) {
      djs = dayjs(value as Date)
    } else if (
      props.formatTemplate &&
      value != null &&
      value !== '' &&
      isString(value)
    ) {
      djs = dayjs(value as string, props.formatTemplate, true)
    }

    return day2Array(djs, mode)
  }

  const defaultValueGetter = () => {
    let min = (props.minDate as Date).getTime()
    let max = (props.maxDate as Date).getTime()

    if (min > max) {
      // 兼容min max搞反的问题
      max = [min, (min = max)][0]
    }

    return parser(new Date(rangeNumber(Date.now(), min, max)))
  }

  const labelFormatter: LabelFormatter = array => {
    return array.length === 0
      ? ''
      : dayjs(array2Date(array, mode)).format(
          getFormatTemplate(props.formatTemplate, mode)
        )
  }

  const formatter: ValueFormatter = (valueArray, labelArray) => {
    if (props.formatter) {
      return props.formatter(valueArray, labelArray)
    }

    const label = labelFormatter(labelArray)
    return {
      value: props.formatTemplate ? label : array2Date(valueArray, mode),
      label
    }
  }

  const handlers: PickerHandlers = {
    optionsHandler,
    formatter,
    parser,
    defaultValueGetter,
    labelFormatter
  }

  provide('fxPickerHandlers', handlers)

  return { handlers }
}
