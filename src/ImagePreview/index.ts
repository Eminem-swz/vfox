import { withInstall } from '@/helpers/with-install'
import ImagePreview from './ImagePreview.vue'
import { createConfirmHook, createShowPopup } from '@/popup/api'
import type { EmptyObject } from '../helpers/types'
import type { PopupSuccessConfirmArgs } from '../popup/types'

const previewImage = createShowPopup<
  {
    urls: string[]
    content?: string
    showClose?: boolean
    navigationButtons?: boolean
    imageHighRendering?: boolean
  },
  PopupSuccessConfirmArgs<EmptyObject>
>({
  apiName: 'previewImage',
  component: ImagePreview,
  createHook: createConfirmHook
})

export { ImagePreview, previewImage }
export default withInstall(ImagePreview, {
  previewImage
})
