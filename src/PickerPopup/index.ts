import { withInstall } from '@/helpers/with-install'
import PickerPopup from '../Picker/PickerPopup.vue'
import type { PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { ShowPickerOptions } from '../Picker/types'

const showPicker = function (object: ShowPickerOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showPicker', function (done) {
    return {
      component: PickerPopup,
      hook: createConfirmHook(done)
    }
  })
}

export { PickerPopup, showPicker }
export default withInstall(PickerPopup, { showPicker })
