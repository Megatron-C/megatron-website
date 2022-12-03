import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { SanityBlocks } from 'sanity-blocks-vue-component';

import firebase from "./clients/firebase"

// firebase.addClient("6660", "I love your agency and i want you to make me a website", "mrsolo@email.com", "Web Development", "mr solo")
// firebase.getClientsData()
// firebase.addEmail()
// firebase.getEmailsData()

const app = createApp(App)

app.use(router)

app.component('sanity-blocks', SanityBlocks);

app.mount('#app')
