import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import ImagePreview from './ImagePreview.vue'
import { ApiFnOptions, PopupConfirmArgs } from '../apis/types'
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

const _ImagePreview: SFCWithInstall<typeof ImagePreview> & {
  previewImage: typeof previewImage
} = Object.assign(ImagePreview, {
  install: function (app: App) {
    app.component(ImagePreview.name, ImagePreview)
  },
  previewImage
})

export default _ImagePreview
