import { withInstall } from '../helpers/with-install'
import Toast from './Toast.vue'
import { createAlertHook, createShowPopup, createHidePopup } from '../popup/api'
import type { PopupSuccessAlertArgs } from '../popup/types'

const showToast = createShowPopup<
  | string
  | ({
      title: string
    } & Partial<{
      type: 'default' | 'success' | 'loading' | 'fail'
      icon: string
      duration: number
      showMask: boolean
    }>),
  PopupSuccessAlertArgs
>({
  apiName: 'showToast',
  component: Toast,
  createHook: createAlertHook,
  singleMode: true,
  hookOptions: options => {
    if (options.duration == null) {
      options.duration = 1500
    }

    return options
  }
})

const showLoading = createShowPopup<
  | string
  | ({
      title: string
    } & Partial<{
      duration: number
      showMask: boolean
    }>),
  PopupSuccessAlertArgs
>({
  apiName: 'showLoading',
  component: Toast,
  createHook: createAlertHook,
  singleMode: true,
  hookOptions: options => {
    options.type = 'loading'
    options.duration = 0

    return options
  }
})

const hideToast = createHidePopup({
  apiName: 'hideToast'
})

const hideLoading = createHidePopup({
  apiName: 'hideLoading'
})

export { Toast, showToast, hideToast, showLoading, hideLoading }
export default Toast
export const install = withInstall(Toast)
