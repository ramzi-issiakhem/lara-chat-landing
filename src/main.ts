import './assets/main.css'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Notifications from "notiwind";
import Vue3Toastify, {type ToastContainerOptions} from "vue3-toastify";


const app = createApp(App)

app.use(Vue3Toastify, {
    autoClose: 3000,
    position: "top-right",

} as ToastContainerOptions);

//app.use(createPinia())
app.use(router)
app.mount('#app')
