import type { FormValue } from '../Form/types'
import type { AnyObject } from '../helpers/types'
import type { ApiFnOptions } from '../apis/types'

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

export type ModelValue = string | number | Values

export type Values = (string | number)[]
export type Labels = string[]

export type ExtraData = AnyObject

export interface DetailObject {
  valueString: string
  labelString: string
  value: Values
  label: Labels
  extraData: ExtraData[]
}

export type UserOptionItem = string | number | AnyObject

export interface OptionItem {
  label: string
  value: string | number
  children: OptionItem[]
  disabled: boolean
  extraData: ExtraData
}

export interface ColRow {
  label: string
  value: string | number
  hasChildren: boolean
  indexes: number[]
  values?: Values
  disabled?: boolean
  selected?: boolean
}

export type ModeNames = 'multiSelector' | 'date' | 'time' | 'datetime'

export type HandleType = 'label' | 'value'

export interface ValueParser {
  (value: unknown, type: HandleType): Values | Labels | Error
}

export interface ValueFormatter {
  (array: Values | Labels, type?: HandleType): string
}

export interface OptionsHandler {
  (index: number, parent?: ColRow): ColRow[]
}

export interface DefaultValueHandler {
  (): PickerValue[]
}

export interface ValueHook {
  (array: Values): FormValue
}

export interface DetailHook {
  (detail: DetailObject): AnyObject
}

export type LabelFormatter = (labelArray: string[]) => string

export interface PickerHandlers {
  optionsHandler?: OptionsHandler
  valueParser?: ValueParser
  valueFormatter?: ValueFormatter
  defaultValueHandler?: DefaultValueHandler
  valueHook?: ValueHook
  detailHook?: DetailHook
  formatter: UserFormatter
  parser: UserParser
  labelFormatter: LabelFormatter
}

export type ShowPickerOptions = {
  options: UserOptionItem[] | UserOptionItem[][]
} & Partial<
  {
    title: string
    value: ModelValue
    mode: ModeNames
    fieldNames: UserFieldNames
  } & ApiFnOptions
>

export type PickerValue = string | number | Date
export type PickerFormatValue = PickerValue | PickerValue[]

export type UserFormatter = (
  valueArray: PickerValue[],
  labelArray: string[]
) => PickerDetail | PickerFormatValue

export type UserParser = (value: unknown) => PickerValue[]

export interface PickerDetail {
  value: PickerFormatValue
  label: string
}
