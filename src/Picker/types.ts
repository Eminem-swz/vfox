import type { AnyObject } from '../helpers/types'
import type { ApiFnOptions } from '../apis/types'

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

export interface OptionsHandler {
  (index: number, parent?: ColRow): ColRow[]
}
export interface DefaultValueGetter {
  (): PickerValue[]
}
export type ValueFormatter = (
  valueArray: PickerValue[],
  labelArray: string[]
) => PickerDetail | PickerModelValue
export type ValueParser = (value: unknown) => PickerValue[]
export type LabelFormatter = (labelArray: string[]) => string
export interface PickerHandlers {
  optionsHandler?: OptionsHandler
  defaultValueGetter?: DefaultValueGetter
  formatter: ValueFormatter
  parser: ValueParser
  labelFormatter: LabelFormatter
}

export type ShowPickerOptions = {
  options: UserOptionItem[] | UserOptionItem[][]
} & Partial<
  {
    title: string
    value: PickerModelValue
    fieldNames: UserFieldNames
  } & ApiFnOptions
>
