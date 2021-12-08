import { multiWithInstall } from '@/helpers/with-install'
import IndexView from './IndexView.vue'
import IndexViewItem from './IndexViewItem.vue'

export { IndexView, IndexViewItem }
export default multiWithInstall(IndexView, [IndexViewItem])
