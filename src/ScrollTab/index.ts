import { multiWithInstall } from '@/helpers/with-install'
import ScrollTab from './ScrollTab.vue'
import ScrollTabItem from './ScrollTabItem.vue'

export { ScrollTab, ScrollTabItem }
export default multiWithInstall(ScrollTab, [ScrollTabItem])
