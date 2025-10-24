import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

createApp(App)
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(router)
  .mount('#app')
