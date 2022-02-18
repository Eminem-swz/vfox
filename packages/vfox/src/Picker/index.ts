import { withInstall } from '../helpers/with-install'
import Picker from './Picker.vue'
import { showPicker } from '../PickerPopup'

export { Picker, showPicker }
export default Picker
export const install = withInstall(Picker)
