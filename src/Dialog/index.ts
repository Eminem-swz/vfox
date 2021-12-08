import { withInstall } from '@/helpers/with-install'
import Dialog from './Dialog.vue'
import type { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'

type ShowDialogOptions = {
  content: string
} & Partial<
  {
    title: string
    maskClosable: boolean
    showCancel: boolean
    cancelText: string
    confirmText: string
  } & ApiFnOptions
>

const showDialog = function (object: ShowDialogOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showDialog', function (done) {
    return {
      component: Dialog,
      hook: createConfirmHook(done)
    }
  })
}

export { Dialog, showDialog }
export default withInstall(Dialog, { showDialog })
