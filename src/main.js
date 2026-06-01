import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify, Dark } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import our custom CSS/SCSS
import './css/app.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
  plugins: {
    Notify,
    Dark
  },
  config: {
    dark: true // Habilita o modo escuro por padrão
  }
})

app.mount('#app')
