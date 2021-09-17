import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"
import './assets/scss/style.scss'

const app = createApp(App)
app.use(store)
app.mount('#app')