import { withInstall } from '@/helpers/with-install'
import DatePickerPopup from '../DatePicker/DatePickerPopup.vue'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import type { ShowDatePickerOptions } from '../DatePicker/types'
import type { PopupConfirmArgs } from '../apis/types'
import type { PickerDetail } from '../Picker/types'

const showDatePicker = createShowPopup<
  ShowDatePickerOptions,
  PopupConfirmArgs<PickerDetail>
>({
  apiName: 'showDatePicker',
  component: DatePickerPopup,
  createHook: createConfirmHook
})

export { DatePickerPopup, showDatePicker }
export default withInstall(DatePickerPopup, { showDatePicker })
