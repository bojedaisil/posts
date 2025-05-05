import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ComponentCustomProperties from "../plugins/index";

import "./assets/main.css";

import Post from "./components/Post.vue";
import PostRepository from "./repositories/post/post.repositories";

const pinia = createPinia();

pinia.use(({ store }) => {
  const baseURL: string = import.meta.env.VITE_PUBLIC_API;
  const api = {
    post: new PostRepository(`${baseURL}/`, {}),
  };
  store.$api = api;
});
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ComponentCustomProperties);
app.mount("#app");
app.component("Post", Post);
