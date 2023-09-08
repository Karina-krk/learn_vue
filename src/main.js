import './assets/main.css'
import PrimeVue from 'primevue/config';
import { initializeApp } from "firebase/app";


import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import 'primevue/resources/themes/viva-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import 'primevue/chip';
import ToastService from 'primevue/toastservice'




const firebaseConfig = {
    apiKey: "AIzaSyAlbWmHCAI0cd0AMae3gIhFS7H2Z86cpNQ",
    authDomain: "karina-learn-vue.firebaseapp.com",
    projectId: "karina-learn-vue",
    storageBucket: "karina-learn-vue.appspot.com",
    messagingSenderId: "418954830931",
    appId: "1:418954830931:web:a1ebf6dec884a1ff1112a6"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
