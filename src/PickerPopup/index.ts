import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import PickerPopup from '../Picker/PickerPopup.vue'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import {
  ModeNames,
  UserFieldNames,
  ModelValue,
  UserOptionItem
} from '../Picker/types'

type ShowPickerOptions = {
  options: UserOptionItem[] | UserOptionItem[][]
} & Partial<
  {
    title: string
    value: ModelValue
    mode: ModeNames
    fieldNames: UserFieldNames
  } & ApiFnOptions
>

const showPicker = function (object: ShowPickerOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showPicker', function (done) {
    return {
      component: PickerPopup,
      hook: createConfirmHook(done)
    }
  })
}

const _PickerPopup: SFCWithInstall<typeof PickerPopup> & {
  showPicker: typeof showPicker
} = Object.assign(PickerPopup, {
  install: function (app: App) {
    app.component(PickerPopup.name, PickerPopup)
  },
  showPicker
})

export default _PickerPopup
