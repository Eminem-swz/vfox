import type { ApiFnOptions } from '../apis/types'
import type {
  UserFieldNames,
  PickerModelValue,
  UserOptionItem
} from '../Picker/types'

export type ShowCascaderOptions = {
  options: UserOptionItem[]
} & Partial<
  {
    title: string
    value: PickerModelValue
    fieldNames: UserFieldNames
  } & ApiFnOptions
>
