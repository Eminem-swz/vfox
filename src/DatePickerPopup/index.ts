import { withInstall } from '@/helpers/with-install'
import DatePickerPopup from '../DatePicker/DatePickerPopup.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { PickerDetail } from '../Picker/types'
import type { ShowDatePickerOptions } from '../DatePicker/types'

const showDatePicker = createShowPopup<
  ShowDatePickerOptions,
  PopupSuccessConfirmArgs<PickerDetail>
>({
  apiName: 'showDatePicker',
  component: DatePickerPopup,
  createHook: createConfirmHook
})

export { DatePickerPopup, showDatePicker }
export default DatePickerPopup
export const install = withInstall(DatePickerPopup)
