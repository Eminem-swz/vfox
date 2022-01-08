import { withInstall } from '@/helpers/with-install'
import ActionSheet from './ActionSheet.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ActionSheetOption, ActionSheetDetail } from './types'

const showActionSheet = createShowPopup<
  {
    options: ActionSheetOption[]
    title?: string
    showCancel?: boolean
    cancelText?: string
  },
  PopupSuccessConfirmArgs<ActionSheetDetail>
>({
  apiName: 'showActionSheet',
  component: ActionSheet,
  createHook: createConfirmHook
})

export { ActionSheet, showActionSheet }
export default ActionSheet
export const install = withInstall(ActionSheet)
