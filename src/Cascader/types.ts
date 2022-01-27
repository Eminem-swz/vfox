import type { UserFieldNames, UserOptionItem } from '../Picker/types'
import type { SelectorModelValue, SelectorDetail } from '../SelectorField/types'

export interface ShowCascaderOptions {
  options: UserOptionItem[]
  value?: SelectorModelValue
  fieldNames?: UserFieldNames
}

export type OnConfirm = (payload: SelectorDetail) => void
