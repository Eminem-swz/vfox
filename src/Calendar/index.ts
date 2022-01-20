import { withInstall } from '../helpers/with-install'
import Calendar from './Calendar.vue'
import { showCalendar } from '../CalendarPopup'

export { Calendar, showCalendar }
export default Calendar
export const install = withInstall(Calendar)
