import { withInstall } from '../helpers/with-install'
import PickerPopup from '../Picker/PickerPopup.vue'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowPickerOptions } from '../Picker/types'
import type { SelectorDetail } from '../SelectorField/types'

const showPicker = createShowPopup<
  ShowPickerOptions,
  PopupSuccessConfirmArgs<SelectorDetail>
>({
  apiName: 'showPicker',
  component: PickerPopup,
  createHook: createConfirmHook
})

export { PickerPopup, showPicker }
export default PickerPopup
export const install = withInstall(PickerPopup)
