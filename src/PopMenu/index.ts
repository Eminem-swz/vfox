import { withInstall } from '../helpers/with-install'
import PopMenu from '../Popover/PopMenu.vue'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { DomSelector, PlacementType } from '../helpers/types'
import type { MenuOption, MenuDetail } from '../Popover/types'

const showPopMenu = createShowPopup<
  {
    selector: DomSelector
    options: MenuOption[]
    placement?: PlacementType
  },
  PopupSuccessConfirmArgs<MenuDetail>
>({
  apiName: 'showPopMenu',
  component: PopMenu,
  createHook: createConfirmHook
})

export { PopMenu, showPopMenu }
export default PopMenu
export const install = withInstall(PopMenu)
