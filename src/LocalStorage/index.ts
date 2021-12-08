import { withNoopInstall } from '@/helpers/with-install'
import { createStorage } from '@/apis/LocalStorage'

const LocalStorage = createStorage('fx')

export { LocalStorage }
export default withNoopInstall(LocalStorage)
