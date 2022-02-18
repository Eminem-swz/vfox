import type { CountTime } from '../CountDown/types'

export type OnStop = (payload: { detail: CountTime; laps: CountTime[] }) => void
