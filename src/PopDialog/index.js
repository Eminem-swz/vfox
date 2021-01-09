import PopDialog from '../Popover/Dialog.vue'
import { showPopDialog } from '../apis/Popup'

PopDialog.install = function(Vue) {
  Vue.component(PopDialog.name, PopDialog)

  // 添加api
  Vue.prototype.$showPopDialog = showPopDialog
}

export default PopDialog