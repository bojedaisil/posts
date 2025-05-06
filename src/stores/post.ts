import { IPost } from "../repositories/post/index.repositories.d";
import { defineStore } from "pinia";

interface IPostStore {
  posts: IPost[];
  searchQuery: string;
  filteredPosts: IPost[];
}

export const usePostStore = defineStore("posts", {
  state: (): IPostStore => ({
    posts: [],
    searchQuery: "",
    filteredPosts: [],
  }),

  actions: {
    async getPost() {
      try {
        const responce = await this.$api.post.getPosts();
        this.posts = responce;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    filteredPosts: (state) => {
      const searchItem = state.searchQuery.toLowerCase();
      const search = state.posts.filter((post) => {
        return post.title.toLowerCase().startsWith(searchItem);
      });

      if (state.searchQuery) {
        return search;
      } else {
        return state.posts;
      }
    },
  },
});
