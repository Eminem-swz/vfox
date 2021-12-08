import { withInstall } from '@/helpers/with-install'
import Notify from './Notify.vue'
import { showPopup, hidePopup, createAlertHook } from '@/apis/Popup'
import type { ApiFnOptions } from '../apis/types'
import type { StateType } from '../helpers/types'

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

export { Notify, showNotify, hideNotify }
export default withInstall(Notify, {
  showNotify,
  hideNotify
})
