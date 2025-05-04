import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ComponentCustomProperties from "../plugins/index";

import "./assets/main.css";

import Photo from "./components/Photo.vue";
const pinia = createPinia;
let app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ComponentCustomProperties);
app.mount("#app");
app.component("Photo", Photo);
