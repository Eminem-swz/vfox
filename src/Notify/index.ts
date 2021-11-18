import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import Notify from './Notify.vue'
import { showPopup, hidePopup, createAlertHook } from '@/apis/Popup'
import { ApiFnOptions } from '../apis/types'
import { StateType } from '../hooks/types'

type ShowNotifyOptions = {
  title: string
} & Partial<
  {
    type: StateType
    icon: string
    duration: number
    backgroundColor: string
    color: string
    closable: boolean
  } & ApiFnOptions
>

const showNotify = function (object: string | ShowNotifyOptions) {
  return showPopup(object, 'showNotify', function (done) {
    return {
      component: Notify,
      hook: createAlertHook(done),
      singleMode: true
    }
  })
}

const hideNotify = function (object?: Partial<ApiFnOptions>) {
  return hidePopup(object || {}, 'hideNotify')
}

const _Notify: SFCWithInstall<typeof Notify> & {
  showNotify: typeof showNotify
  hideNotify: typeof hideNotify
} = Object.assign(Notify, {
  install: function (app: App) {
    app.component(Notify.name, Notify)
  },
  showNotify,
  hideNotify
})

export default _Notify
