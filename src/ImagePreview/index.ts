import { withInstall } from '@/helpers/with-install'
import ImagePreview from './ImagePreview.vue'
import type { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
import { createConfirmHook, showPopup } from '@/apis/Popup'

type PreviewImageOptions = {
  urls: string[]
} & Partial<
  {
    content: string
    showClose: boolean
    navigationButtons: boolean
    imageHighRendering: boolean
  } & ApiFnOptions
>

const previewImage = function (object: PreviewImageOptions) {
  return showPopup<PopupConfirmArgs>(object, 'previewImage', function (done) {
    return {
      component: ImagePreview,
      hook: createConfirmHook(done)
    }
  })
}

export { ImagePreview, previewImage }
export default withInstall(ImagePreview, {
  previewImage
})
