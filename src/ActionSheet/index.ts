import { withInstall } from '@/helpers/with-install'
import ActionSheet from './ActionSheet.vue'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import type { ActionSheetOption, ActionSheetDetail } from './types'
import type { PopupSuccessArgs } from '../popup/types'

const showActionSheet = createShowPopup<
  {
    options: ActionSheetOption[]
    title?: string
    showCancel?: boolean
    cancelText?: string
  },
  PopupSuccessArgs<ActionSheetDetail>
>({
  apiName: 'showActionSheet',
  component: ActionSheet,
  createHook: createConfirmHook
})

export { ActionSheet, showActionSheet }
export default withInstall(ActionSheet, {
  showActionSheet
})
