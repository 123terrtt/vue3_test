import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    // 使用 CSS
const app = createApp(App)
app.use(ElementPlus)

app.mount('#app')
