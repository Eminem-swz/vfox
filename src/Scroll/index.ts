import { withNoopInstall } from '@/helpers/with-install'
import { pageScrollTo, scrollTo } from '@/apis/Scroll'

const Scroll = {
  pageScrollTo,
  scrollTo
}

export { Scroll }
export default withNoopInstall(Scroll)
