export interface CountTime {
  time: number
  days: string
  fullHours: string
  thousandsFullHours: string
  hours: string
  minutes: string
  seconds: string
  milliseconds: string
}

export type OnPauseOrResume = (payload: { remainTime: number }) => void
export type OnEnd = (payload: { startTime: number; endTime: number }) => void
