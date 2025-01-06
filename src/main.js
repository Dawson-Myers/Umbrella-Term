import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import il8n from './il8n'


const app = createApp(App)

app.use(router)

app.use(il8n)

app.mount('#app')
