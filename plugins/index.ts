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
  install: (app: App, options: any) => {
    const baseURL: string = process.env.VITE_PUBLIC_API_BASE_URL as string;
    const api: IApiInstance = {
      post: new PostRepository(`${baseURL}/`, {}),
    };
    app.provide("api", api);
  },
};
