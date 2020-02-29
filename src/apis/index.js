import { createIntersectionObserver } from './IntersectionObserver'
import { createSelectorQuery } from './SelectorQuery'
import { showModal } from './Modal'
import { showToast, showLoading, hideLoading, hideToast } from './Toast'
import {
  getStorageInfo,
  getStorage,
  setStorage,
  removeStorage,
  clearStorage
} from './LocalStorage'
import { pageScrollTo } from './Scroll'

export function addApis(Vue) {
  Vue.prototype.$createIntersectionObserver = function(options) {
    return createIntersectionObserver(this.$el, options)
  }
  Vue.prototype.$createSelectorQuery = function() {
    return createSelectorQuery(this.$el)
  }

  Vue.prototype.$showModal = showModal
  Vue.prototype.$showToast = showToast
  Vue.prototype.$hideToast = hideToast
  Vue.prototype.$showLoading = showLoading
  Vue.prototype.$hideLoading = hideLoading

  Vue.prototype.$getStorageInfo = getStorageInfo
  Vue.prototype.$getStorage = getStorage
  Vue.prototype.$setStorage = setStorage
  Vue.prototype.$removeStorage = removeStorage
  Vue.prototype.$clearStorage = clearStorage

  Vue.prototype.$pageScrollTo = pageScrollTo
}
