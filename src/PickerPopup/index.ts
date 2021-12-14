import { withInstall } from '@/helpers/with-install'
import PickerPopup from '../Picker/PickerPopup.vue'
import type { PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import type { PickerDetail, ShowPickerOptions } from '../Picker/types'

const showPicker = createShowPopup<
  ShowPickerOptions,
  PopupConfirmArgs<PickerDetail>
>({
  apiName: 'showPicker',
  component: PickerPopup,
  createHook: createConfirmHook
})

export { PickerPopup, showPicker }
export default withInstall(PickerPopup, { showPicker })
