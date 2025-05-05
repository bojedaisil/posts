import PostRepository from "../src/repositories/post/post.repositories";
import { App } from "vue";

interface IApiInstance {
  post: PostRepository;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: IApiInstance;
  }
}

export default {
  install: (app: App) => {
    const baseURL: string = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const api: IApiInstance = {
      post: new PostRepository(`${baseURL}/`, {}),
    };
    app.provide("api", api);
    app.config.globalProperties.$api = api;
    // console.log(api);
  },
};
