import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
// import { createVuetify } from "vuetify";
// const vuetify = createVuetify({});
import Photo from "./components/Photo.vue";

let app = createApp(App);
app.use(router).mount("#app");
app.component("Photo", Photo);
