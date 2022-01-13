import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail
} from '../SelectorField/types'

export interface CalendarDetail extends SelectorDetail {
  valueArray: number[][]
  rangeCount: number
}
export interface CalendarOriginalDetail extends CalendarDetail {
  value: SelectorValue[]
}

export type OnConfirm = (payload: CalendarDetail) => void
export type OnSelect = (payload: CalendarDetail) => void

export type Mode = 'single' | 'range'

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

export type ShowCalendarOptions = Partial<{
  title: string
  value: SelectorModelValue
  showConfirm: boolean
  showClose: boolean
  minDate: Date
  maxDate: Date
  mode: Mode
  allowSameDay: boolean
  maxRange: number
  dayHandler: DayHandler
}>

export interface ValueFormatter {
  (valueArray: Date[], mode: Mode): SelectorDetail | SelectorModelValue
}
export interface ValueParser {
  (value: unknown, mode: Mode): Date[]
}
