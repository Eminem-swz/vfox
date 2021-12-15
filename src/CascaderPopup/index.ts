import { withInstall } from '@/helpers/with-install'
import CascaderPopup from '../Cascader/CascaderPopup.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { PickerDetail } from '../Picker/types'
import type { ShowCascaderOptions } from '../Cascader/types'

const showCascader = createShowPopup<
  ShowCascaderOptions,
  PopupSuccessConfirmArgs<PickerDetail>
>({
  apiName: 'showCascader',
  component: CascaderPopup,
  createHook: createConfirmHook
})

export { CascaderPopup, showCascader }
export default withInstall(CascaderPopup, { showCascader })
