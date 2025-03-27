import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@/assets/main.css'

const app = createApp(App)

app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: true,
  toastClassName: 'custom-toast'
})

app.mount('#app')