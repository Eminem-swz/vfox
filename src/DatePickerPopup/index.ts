import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import DatePickerPopup from '../DatePicker/DatePickerPopup.vue'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import { ModeName, OptionFilter } from '../DatePicker/types'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'

interface ShowPickerOptions extends ApiFnOptions {
  title: string
  value: Date
  minDate: Date
  maxDate: Date
  mode: ModeName
  filter: OptionFilter
}

const showDatePicker = function (object: Partial<ShowPickerOptions>) {
  return showPopup<PopupConfirmArgs>(object, 'showDatePicker', function (done) {
    return {
      component: DatePickerPopup,
      hook: createConfirmHook(done)
    }
  })
}

const _DatePickerPopup: SFCWithInstall<typeof DatePickerPopup> & {
  showDatePicker: typeof showDatePicker
} = Object.assign(DatePickerPopup, {
  install: function (app: App) {
    app.component(DatePickerPopup.name, DatePickerPopup)
  },
  showDatePicker
})

export default _DatePickerPopup
