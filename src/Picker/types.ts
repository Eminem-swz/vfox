import type { AnyObject } from '../helpers/types'
import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail,
  SelectorValueParser,
  SelectorValueFormatter
} from '../SelectorField/types'

export interface UserFieldNames {
  label?: string
  value?: string
  children?: string
}
export interface FieldNames {
  label: string
  value: string
  children: string
}

export type UserOptionItem = string | number | AnyObject
export interface OptionItem {
  label: string
  value: string | number
  children: OptionItem[]
  disabled: boolean
}

export interface ColRow {
  label: string
  value: string | number
  hasChildren: boolean
  indexes: number[]
  values?: SelectorValue[]
  disabled?: boolean
  selected?: boolean
}

export interface PickerOptionsHandler {
  (index: number, parent?: ColRow): ColRow[]
}
export interface DefaultValueGetter {
  (): SelectorValue[]
}
export interface PickerLabelFormatter {
  (labelArray: string[]): string
}
export interface PickerHandlers {
  optionsHandler?: PickerOptionsHandler
  defaultValueGetter?: DefaultValueGetter
  formatter: SelectorValueFormatter
  parser: SelectorValueParser
  labelFormatter: PickerLabelFormatter
}

export interface ShowPickerOptions {
  options: UserOptionItem[] | UserOptionItem[][]
  title?: string
  value?: SelectorModelValue
  fieldNames?: UserFieldNames
}

export type OnConfirm = (payload: SelectorDetail) => void
