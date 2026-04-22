import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

//引入初始化样式文件
import '@/styles/common.scss'


createApp(App).use(router)
.use(createPinia()).mount('#app')
