import {createApp} from 'vue';
import App from './App.vue'
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import DefaultLayout from "@/layouts/default.vue";
import Default1Layout from "@/layouts/default1.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min';

createApp(App)
    .component("default-layout", DefaultLayout)
    .component("default1-layout", Default1Layout)
    .use(router)
    .use(store)
    .mount('#app');
