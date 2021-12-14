import { withInstall } from '@/helpers/with-install'
import PickerPopup from '../Picker/PickerPopup.vue'
import type { PopupSuccessArgs } from '../popup/types'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import type { PickerDetail, ShowPickerOptions } from '../Picker/types'

const showPicker = createShowPopup<
  ShowPickerOptions,
  PopupSuccessArgs<PickerDetail>
>({
  apiName: 'showPicker',
  component: PickerPopup,
  createHook: createConfirmHook
})

export { PickerPopup, showPicker }
export default withInstall(PickerPopup, { showPicker })
