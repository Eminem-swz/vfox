import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vfox from '@/index'
import '@/style'
import { add as localeAdd } from '@/Locale'
import enUS from '@/Locale/lang/en-US'

import { isIOS, isMobile } from '@/helpers/device'

localeAdd('en-US', enUS)

createApp(App).use(router).use(Vfox).mount('#app')

if (isMobile && isIOS) {
  window.onload = function () {
    document.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    })
    let lastTouchEnd = 0
    document.addEventListener(
      'touchend',
      function (e) {
        const now = new Date().getTime()
        if (now - lastTouchEnd <= 300) {
          e.preventDefault()
        }
        lastTouchEnd = now
      },
      false
    )
    // document.addEventListener('gesturestart', function (e) {
    //   e.preventDefault()
    // })
  }
}
