import type { PopupCancelArgs, PopupConfirmArgs } from '../popup/types'
import type { PickerDetail, PickerChangeArgs } from '../Picker/types'
import type {
  UserFieldNames,
  PickerModelValue,
  UserOptionItem
} from '../Picker/types'

export type CascaderChangeArgs = PickerChangeArgs
export type CascaderConfirmArgs = PopupConfirmArgs<PickerDetail>
export type CascaderCancelArgs = PopupCancelArgs

export interface ShowCascaderOptions {
  options: UserOptionItem[]
  title?: string
  value?: PickerModelValue
  fieldNames?: UserFieldNames
}
