import type { App } from 'vue'
import * as Components from './components'
// import './style/index'

const Vfox = {
  install(app: App) {
    Object.values(Components).forEach(component => {
      app.use(component)
    })
  }
}

export * from './components'
export default Vfox
