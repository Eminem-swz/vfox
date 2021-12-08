import { multiWithInstall } from '@/helpers/with-install'
import StickyView from './StickyView.vue'
import StickyViewItem from './StickyViewItem.vue'

export { StickyView, StickyViewItem }
export default multiWithInstall(StickyView, [StickyViewItem])
