import type { ApiFnOptions } from '../apis/types'

export interface DetailObject {
  value: Date[]
  valueArray: number[][]
  formatted: string
  rangeCount: number
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

export type ShowCalendarOptions = Partial<
  ApiFnOptions & {
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
  }
>
