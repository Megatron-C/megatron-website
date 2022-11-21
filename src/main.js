import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { SanityBlocks } from 'sanity-blocks-vue-component';

const app = createApp(App)

app.use(router)

app.component('sanity-blocks', SanityBlocks);

app.mount('#app')
