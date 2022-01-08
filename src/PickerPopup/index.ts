import { withInstall } from '@/helpers/with-install'
import PickerPopup from '../Picker/PickerPopup.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { PickerDetail, ShowPickerOptions } from '../Picker/types'

const showPicker = createShowPopup<
  ShowPickerOptions,
  PopupSuccessConfirmArgs<PickerDetail>
>({
  apiName: 'showPicker',
  component: PickerPopup,
  createHook: createConfirmHook
})

export { PickerPopup, showPicker }
export default Object.assign(withInstall(PickerPopup), { showPicker })
