import { multiWithInstall } from '@/helpers/with-install'
import Avatar from './Avatar.vue'
import AvatarGroup from './AvatarGroup.vue'

export { Avatar, AvatarGroup }
export default multiWithInstall(Avatar, [AvatarGroup])
