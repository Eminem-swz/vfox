import { withInstall } from '@/helpers/with-install'
import PopMenu from '../Popover/PopMenu.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { DomSelector, PlacementType } from '../helpers/types'
import type { PopMenuOption, PopMenuDetail } from '../Popover/types'

const showPopMenu = createShowPopup<
  {
    selector: DomSelector
    options: PopMenuOption[]
    placement?: PlacementType
  },
  PopupSuccessConfirmArgs<PopMenuDetail>
>({
  apiName: 'showPopMenu',
  component: PopMenu,
  createHook: createConfirmHook
})

export { PopMenu, showPopMenu }
export default Object.assign(withInstall(PopMenu), {
  showPopMenu
})
