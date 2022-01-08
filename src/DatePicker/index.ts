import { withInstall } from '@/helpers/with-install'
import DatePicker from './DatePicker.vue'
import { showDatePicker } from '@/DatePickerPopup'

export { DatePicker, showDatePicker }
export default Object.assign(withInstall(DatePicker), { showDatePicker })
