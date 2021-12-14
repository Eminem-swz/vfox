import { withInstall } from '@/helpers/with-install'
import PopDialog from '../Popover/PopDialog.vue'
import type { ApiFnOptions, PopupSuccessArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { DomSelector, PlacementType } from '../helpers/types'

type ShowPopDialogOptions = {
  selector: DomSelector
  content: string
} & Partial<
  {
    placement: PlacementType
    showCancel: boolean
    cancelText: string
    confirmText: string
  } & ApiFnOptions
>

const showPopDialog = function (object: ShowPopDialogOptions) {
  return showPopup<PopupSuccessArgs>(object, 'showPopDialog', function (done) {
    return {
      component: PopDialog,
      hook: createConfirmHook(done)
    }
  })
}

export { PopDialog, showPopDialog }
export default withInstall(PopDialog, {
  showPopDialog
})
