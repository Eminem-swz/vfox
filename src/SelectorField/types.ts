export type SelectorValue = string | number | Date
export type SelectorModelValue = SelectorValue | SelectorValue[]
export interface SelectorDetail {
  value: SelectorModelValue
  label: string
}

export interface SelectorValueFormatter {
  (valueArray: SelectorValue[], labelArray: string[]):
    | SelectorDetail
    | SelectorModelValue
}
export interface SelectorValueParser {
  (value: unknown): SelectorValue[]
}

export type SelectorOnChange = (payload: SelectorModelValue) => void

export type SelectorOnConfirm = (payload: SelectorDetail) => void
