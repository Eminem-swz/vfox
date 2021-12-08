import type { ApiFnOptions } from '../apis/types'
import type {
  ModeNames,
  UserFieldNames,
  ModelValue,
  UserOptionItem
} from '../Picker/types'

export type ShowCascaderOptions = {
  options: UserOptionItem[]
} & Partial<
  {
    title: string
    value: ModelValue
    mode: ModeNames
    fieldNames: UserFieldNames
  } & ApiFnOptions
>
