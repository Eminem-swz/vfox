import type { PopupCancelArgs, PopupConfirmArgs } from '../popup/types'
import type { PickerDetail, PickerChangeArgs } from '../Picker/types'

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

export interface DatePickerFilter {
  (number: number, type: ColName): boolean
}

export interface DatePickerDetail extends PickerDetail {
  value: Date
}

export type DatePickerChangeArgs = PickerChangeArgs
export type DatePickerConfirmArgs = PopupConfirmArgs<DatePickerDetail>
export type DatePickerCancelArgs = PopupCancelArgs

export type ShowDatePickerOptions = Partial<{
  title: string
  value: Date
  minDate: Date
  maxDate: Date
  mode: ModeName
  filter: DatePickerFilter
}>
