import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import CalendarPopup from '../Calendar/CalendarPopup.vue'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import { CalendarMode, CalendarValue, DayHandler } from '../Calendar/types'

interface ShowCalendarOptions extends ApiFnOptions {
  title: string
  value: CalendarValue
  showConfirm: boolean
  showClose: boolean
  minDate: Date
  maxDate: Date
  mode: CalendarMode
  allowSameDay: boolean
  maxRange: number
  dayHandler: DayHandler
}

const showCalendar = function (object: Partial<ShowCalendarOptions>) {
  return showPopup<PopupConfirmArgs>(object, 'showCalendar', function (done) {
    return {
      component: CalendarPopup,
      hook: createConfirmHook(done)
    }
  })
}

const _CalendarPopup: SFCWithInstall<typeof CalendarPopup> & {
  showCalendar: typeof showCalendar
} = Object.assign(CalendarPopup, {
  install: function (app: App) {
    app.component(CalendarPopup.name, CalendarPopup)
  },
  showCalendar
})

export default _CalendarPopup
