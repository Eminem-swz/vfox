import type {
  PickerDetail,
  PickerValue,
  PickerModelValue
} from '../Picker/types'
import type { PopupCancelArgs } from '../popup/types'

export interface DetailObject {
  value: Date[]
  valueArray: number[][]
  formatted: string
  rangeCount: number
}

export interface CalendarDetail extends PickerDetail {
  valueArray: number[][]
  rangeCount: number
}
export interface CalendarOriginalDetail extends CalendarDetail {
  value: PickerValue[]
}

export type CalendarMode = 'single' | 'range'

export interface DayInfo {
  cover?: boolean
  topHighlight?: boolean
  topText?: string
  state: string
  bottomHighlight?: boolean
  bottomText?: string
  text: string
  dateString: string
  date?: Date
  timestamp: number
}

export type DayHandler = (dayInfo: DayInfo) => DayInfo

export type CalendarValue = Date | Date[] | number[] | string[] | string

export type ShowCalendarOptions = Partial<{
  title: string
  value: CalendarValue
  showConfirm: boolean
  showClose: boolean
  minDate: Date
  maxDate: Date
  mode: CalendarMode
  allowSameDay: boolean
  maxRange: number
  dayHandler: DayHandler
}>

export interface CalendarValueFormatter {
  (valueArray: Date[], mode: CalendarMode): PickerDetail | PickerModelValue
}
export interface CalendarValueParser {
  (value: unknown, mode: CalendarMode): Date[]
}

export type CalendarChangeArgs = PickerModelValue

export interface CalendarSelectArgs extends CalendarDetail {
  type: 'select'
}
export type CalendarConfirmArgs = CalendarDetail
export type CalendarCancelArgs = PopupCancelArgs
