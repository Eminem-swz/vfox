import { withInstall } from '@/helpers/with-install'
import Picker from './Picker.vue'
import { showPicker } from '@/PickerPopup'

export { Picker, showPicker }
export default Object.assign(withInstall(Picker), { showPicker })
