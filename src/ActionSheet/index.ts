import { withInstall } from '@/helpers/with-install'
import ActionSheet from './ActionSheet.vue'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { ActionSheetItem } from './types'
import type { ApiFnOptions, PopupConfirmArgs } from '../apis/types'

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

export { ActionSheet, showActionSheet }
export default withInstall(ActionSheet, {
  showActionSheet
})
