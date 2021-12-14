import { withInstall } from '@/helpers/with-install'
import ImagePreview from './ImagePreview.vue'
import type { PopupSuccessArgs } from '../popup/types'
import { createConfirmHook, createShowPopup } from '@/apis/Popup'
import { EmptyObject } from '../helpers/types'

const previewImage = createShowPopup<
  {
    urls: string[]
    content?: string
    showClose?: boolean
    navigationButtons?: boolean
    imageHighRendering?: boolean
  },
  PopupSuccessArgs<EmptyObject>
>({
  apiName: 'previewImage',
  component: ImagePreview,
  createHook: createConfirmHook
})

export { ImagePreview, previewImage }
export default withInstall(ImagePreview, {
  previewImage
})
