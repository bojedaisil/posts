import { PluginContainer } from "vite";
import { IPost } from "../repositories/post/post.repositories.d";
import { defineStore } from "pinia";
import { inject } from "vue";

interface IPostStore {
  data: IPost[];
}

export const usePostStore = defineStore("post", {
  state: (): IPostStore => ({
    data: [],
  }),

  actions: {
    async getPost(dto: { page: number; limit: number }) {
      try {
        const api = this.$api;
        const responce = await api.post.getPosts(dto);
        this.data = responce.data;
        return responce;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
