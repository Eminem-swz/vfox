import { withInstall } from '@/helpers/with-install'
import Cascader from './Cascader.vue'
import { showCascader } from '@/CascaderPopup'

export { Cascader, showCascader }
export default Cascader
export const install = withInstall(Cascader)
