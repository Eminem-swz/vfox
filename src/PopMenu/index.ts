import { withInstall } from '@/helpers/with-install'
import PopMenu from '../Popover/PopMenu.vue'
import type { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { DomSelector, PlacementType } from '../helpers/types'
import type { OptionItem } from '../Popover/types'

type ShowPopMenuOptions = {
  selector: DomSelector
  options: OptionItem[]
} & Partial<
  {
    placement: PlacementType
  } & ApiFnOptions
>

const showPopMenu = function (object: ShowPopMenuOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showPopMenu', function (done) {
    return {
      component: PopMenu,
      hook: createConfirmHook(done)
    }
  })
}

export { PopMenu, showPopMenu }
export default withInstall(PopMenu, {
  showPopMenu
})
