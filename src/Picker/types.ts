import { PopupCancelArgs } from '../popup/types'
import type { AnyObject } from '../helpers/types'

export type PickerValue = string | number | Date
export type PickerModelValue = PickerValue | PickerValue[]
export interface PickerDetail {
  value: PickerModelValue
  label: string
}

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
  values?: PickerValue[]
  disabled?: boolean
  selected?: boolean
}

export interface PickerOptionsHandler {
  (index: number, parent?: ColRow): ColRow[]
}
export interface DefaultValueGetter {
  (): PickerValue[]
}
export interface PickerValueFormatter {
  (valueArray: PickerValue[], labelArray: string[]):
    | PickerDetail
    | PickerModelValue
}
export interface PickerValueParser {
  (value: unknown): PickerValue[]
}
export interface PickerLabelFormatter {
  (labelArray: string[]): string
}
export interface PickerHandlers {
  optionsHandler?: PickerOptionsHandler
  defaultValueGetter?: DefaultValueGetter
  formatter: PickerValueFormatter
  parser: PickerValueParser
  labelFormatter: PickerLabelFormatter
}

export interface ShowPickerOptions {
  options: UserOptionItem[] | UserOptionItem[][]
  title?: string
  value?: PickerModelValue
  fieldNames?: UserFieldNames
}

export type PickerChangeArgs = PickerModelValue
export type PickerConfirmArgs = PickerDetail
export type PickerCancelArgs = PopupCancelArgs
