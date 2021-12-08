import { withInstall } from '@/helpers/with-install'
import CascaderPopup from '../Cascader/CascaderPopup.vue'
import type { PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'
import type { ShowCascaderOptions } from '../Cascader/types'

const showCascader = function (object: ShowCascaderOptions) {
  return showPopup<PopupConfirmArgs>(object, 'showCascader', function (done) {
    return {
      component: CascaderPopup,
      hook: createConfirmHook(done)
    }
  })
}

export { CascaderPopup, showCascader }
export default withInstall(CascaderPopup, { showCascader })
