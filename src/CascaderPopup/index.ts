import { withInstall } from '@/helpers/with-install'
import CascaderPopup from '../Cascader/CascaderPopup.vue'
import type { PopupSuccessArgs } from '../popup/types'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import type { ShowCascaderOptions } from '../Cascader/types'
import type { PickerDetail } from '../Picker/types'

const showCascader = createShowPopup<
  ShowCascaderOptions,
  PopupSuccessArgs<PickerDetail>
>({
  apiName: 'showCascader',
  component: CascaderPopup,
  createHook: createConfirmHook
})

export { CascaderPopup, showCascader }
export default withInstall(CascaderPopup, { showCascader })
