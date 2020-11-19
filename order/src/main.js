import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import ElementPlus from "element-plus"

createApp(App).use(router).use(ElementPlus).mount('#app')
