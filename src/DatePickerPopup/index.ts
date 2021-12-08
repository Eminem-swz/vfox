import { withInstall } from '@/helpers/with-install'
import DatePickerPopup from '../DatePicker/DatePickerPopup.vue'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { ShowPickerOptions } from '../DatePicker/types'
import type { PopupConfirmArgs } from '../apis/types'

const showDatePicker = function (object: Partial<ShowPickerOptions>) {
  return showPopup<PopupConfirmArgs>(object, 'showDatePicker', function (done) {
    return {
      component: DatePickerPopup,
      hook: createConfirmHook(done)
    }
  })
}

export { DatePickerPopup, showDatePicker }
export default withInstall(DatePickerPopup, { showDatePicker })
