import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import Dialog from './Dialog.vue'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
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

const _Dialog: SFCWithInstall<typeof Dialog> & {
  showDialog: typeof showDialog
} = Object.assign(Dialog, {
  install: function (app: App) {
    app.component(Dialog.name, Dialog)
  },
  showDialog
})

export default _Dialog
