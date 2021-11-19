import { App } from 'vue'
import * as Components from './components'
import { isIOS, isMobile } from './helpers/device'
// import './style'

// iOS点击态
function initEvent() {
  if (isMobile) {
    if (isIOS) {
      // console.log('support active')
      document.addEventListener(
        'touchstart',
        function () {
          // noop
        },
        false
      )
    }
  }
}

const Vfox = {
  install(app: App) {
    Object.values(Components).forEach(component => {
      app.use(component)
    })

    initEvent()
  }
}

export * from './components'
export default Vfox
