import type { SelectorDetail } from '../SelectorField/types'
import type { ColRow } from '../Picker/types'

export type ColName = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
export type ModeName =
  | 'date'
  | 'time'
  | 'datetime'
  | 'minute-second'
  | 'hour-minute'
  | 'hour-minute-second'
  | 'day-hour'
  | 'month-day'
  | 'month-day-hour'
  | 'month-day-hour-minute'
  | 'year-month'
  | 'year-month-day'
  | 'year-month-day-hour'
  | 'year-month-day-hour-minute'
  | 'year-month-day-hour-minute-second'

export interface OptionFilter {
  (number: number, type: ColName): boolean
}

export interface RowsParser {
  (
    index: number,
    parent: ColRow | null,
    options: {
      minDate: Date
      maxDate: Date
      mode: ModeName
      filter: OptionFilter
    }
  ): ColRow[]
}

export type OnConfirm = (payload: SelectorDetail) => void

export type ShowDatePickerOptions = Partial<{
  title: string
  value: Date
  minDate: Date
  maxDate: Date
  mode: ModeName
  filter: OptionFilter
}>
