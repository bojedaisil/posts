import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

//plugins
import ComponentCustomProperties from "../plugins/index";

//repositories
import PostRepository from "./repositories/post/index.repositories";

//components
import Post from "./components/Post.vue";
import Search from "./components/Search.vue";

//primevue
import "primeicons/primeicons.css";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import Aura from "@primeuix/themes/aura";

const pinia = createPinia();

pinia.use(({ store }) => {
  const baseURL: string = import.meta.env.VITE_PUBLIC_API;
  const api = {
    post: new PostRepository(`${baseURL}/`, {}),
  };
  store.$api = api;
});
const app = createApp(App);
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});
app.component("InputText", InputText);
app.component("IftaLabel", IftaLabel);
app.component("Search", Search);
app.component("Post", Post);

app.use(router);
app.use(pinia);

app.use(ComponentCustomProperties);
app.mount("#app");
