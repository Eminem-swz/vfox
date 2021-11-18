import { App } from 'vue'
import { SFCWithInstall } from '../helpers/types'
import ActionSheet from './ActionSheet.vue'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import { ActionSheetItem } from './types'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'

type ShowActionSheetOptions = {
  options: ActionSheetItem[]
} & Partial<
  {
    title: string
    showCancel: boolean
    cancelText: string
  } & ApiFnOptions
>

const showActionSheet = function (object: ShowActionSheetOptions) {
  return showPopup<PopupConfirmArgs>(
    object,
    'showActionSheet',
    function (done) {
      return {
        component: ActionSheet,
        hook: createConfirmHook(done)
      }
    }
  )
}

const _ActionSheet: SFCWithInstall<typeof ActionSheet> & {
  showActionSheet: typeof showActionSheet
} = Object.assign(ActionSheet, {
  install: function (app: App) {
    app.component(ActionSheet.name, ActionSheet)
  },
  showActionSheet
})

export default _ActionSheet
