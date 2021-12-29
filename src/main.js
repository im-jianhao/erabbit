import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 样式
import 'normalize.css'
import '@/styles/common.less'
import 'windi.css'

createApp(App).use(store).use(router).mount('#app')
