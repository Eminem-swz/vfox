import { withInstall } from '@/helpers/with-install'
import CalendarPopup from '../Calendar/CalendarPopup.vue'
import type { PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { ShowCalendarOptions } from '../Calendar/types'

const showCalendar = function (object: ShowCalendarOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showCalendar', function (done) {
    return {
      component: CalendarPopup,
      hook: createConfirmHook(done)
    }
  })
}

export { CalendarPopup, showCalendar }
export default withInstall(CalendarPopup, { showCalendar })
