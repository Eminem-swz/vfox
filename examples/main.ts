import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vfox from '@/index'
import '@/style/index'

createApp(App)
  .use(router)
  .use(Vfox)
  .mount('#app')
