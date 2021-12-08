import { withInstall } from '@/helpers/with-install'
import Popover from './Popover.vue'
import type { ApiFnOptions } from '../apis/types'
import { createAlertHook, showPopup } from '@/apis/Popup'
import type { DomSelector, PlacementType } from '../helpers/types'

type ShowPopoverOptions = {
  selector: DomSelector
  content: string
} & Partial<
  {
    placement: PlacementType
  } & ApiFnOptions
>

const showPopover = function (object: ShowPopoverOptions) {
  return showPopup(object, 'showPopover', function (done) {
    return {
      component: Popover,
      hook: createAlertHook(done)
    }
  })
}

export { Popover, showPopover }
export default withInstall(Popover, { showPopover })
