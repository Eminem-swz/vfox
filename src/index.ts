import type { App } from 'vue'
import * as ComponentPlugins from './components/install'
export * from './types'
// import './style/index'

const Vfox = {
  install(app: App) {
    Object.values(ComponentPlugins).forEach(plugin => {
      app.use(plugin)
    })
  }
}

export * from './components/api'
export * from './components'
export default Vfox
