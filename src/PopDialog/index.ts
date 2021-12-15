import { withInstall } from '@/helpers/with-install'
import PopDialog from '../Popover/PopDialog.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { DomSelector, PlacementType, EmptyObject } from '../helpers/types'

const showPopDialog = createShowPopup<
  {
    selector: DomSelector
    content: string
  } & Partial<{
    placement: PlacementType
    showCancel: boolean
    cancelText: string
    confirmText: string
  }>,
  PopupSuccessConfirmArgs<EmptyObject>
>({
  apiName: 'showPopDialog',
  component: PopDialog,
  createHook: createConfirmHook
})

export { PopDialog, showPopDialog }
export default withInstall(PopDialog, {
  showPopDialog
})
