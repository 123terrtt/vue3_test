import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    // 使用 CSS
import router from '@/router'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
