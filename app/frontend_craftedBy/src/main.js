import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaStores from './plugins/piniaStores'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).use(piniaStores).mount('#app')
