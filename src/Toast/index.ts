import { App } from 'vue'
import { SFCWithInstall } from '@/helpers/types'
import Toast from './Toast.vue'
import { showPopup, hidePopup, createAlertHook } from '@/apis/Popup'
import { ApiFnOptions } from '../apis/types'
import { isObject, isString } from '@/helpers/util'

type ShowToastOptions = {
  title: string
} & Partial<
  {
    type: 'default' | 'success' | 'loading' | 'fail'
    icon: string
    duration: number
    mask: boolean
  } & ApiFnOptions
>

type ShowLoadingOptions = {
  title: string
} & Partial<
  {
    duration: number
    mask: boolean
  } & ApiFnOptions
>

const showToast = function (object: string | ShowToastOptions) {
  return showPopup(object, 'showToast', function (done) {
    return {
      component: Toast,
      hook: createAlertHook(done),
      singleMode: true
    }
  })
}

const showLoading = function (object: string | ShowLoadingOptions) {
  let options: ShowLoadingOptions & {
    type?: string
  }

  if (isString(object)) {
    options = {
      title: object as string
    }
  } else if (!isObject(object)) {
    options = {
      title: ''
    }
  } else {
    options = object as ShowLoadingOptions
  }

  options.type = 'loading'
  options.duration = 0

  return showPopup(options, 'showLoading', function (done) {
    return {
      component: Toast,
      hook: createAlertHook(done),
      singleMode: true
    }
  })
}

const hideToast = function (object?: Partial<ApiFnOptions>) {
  return hidePopup(object || {}, 'hideToast')
}

const hideLoading = function (object?: Partial<ApiFnOptions>) {
  return hidePopup(object || {}, 'hideLoading')
}

const _Toast: SFCWithInstall<typeof Toast> & {
  showToast: typeof showToast
  hideToast: typeof hideToast
  showLoading: typeof showLoading
  hideLoading: typeof hideLoading
} = Object.assign(Toast, {
  install: function (app: App) {
    app.component(Toast.name, Toast)
  },
  showToast,
  hideToast,
  showLoading,
  hideLoading
})

export default _Toast
