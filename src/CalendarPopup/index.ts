import { withInstall } from '@/helpers/with-install'
import CalendarPopup from '../Calendar/CalendarPopup.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowCalendarOptions, CalendarDetail } from '../Calendar/types'

const showCalendar = createShowPopup<
  ShowCalendarOptions,
  PopupSuccessConfirmArgs<CalendarDetail>
>({
  apiName: 'showCalendar',
  component: CalendarPopup,
  createHook: createConfirmHook
})

export { CalendarPopup, showCalendar }
export default withInstall(CalendarPopup, { showCalendar })
