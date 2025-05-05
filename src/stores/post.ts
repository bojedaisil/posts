import { computed, inject } from "vue";
import { IPost } from "../repositories/post/post.repositories.d";
import { defineStore } from "pinia";

interface IPostStore {
  posts: IPost[];
  searchQuery: string;
}

export const usePostStore = defineStore("posts", {
  state: (): IPostStore => ({
    posts: [],
    searchQuery: "",
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
  // getters: {
  //   filteredPosts: (state) => {
  //     const search = state.posts.filter((post) => {
  //       return state.posts
  //         .toLowerCase()
  //         .split("")
  //         .every((v) => post.title.toLowerCase().startWidth(v));
  //     });
  //     console.log(search);

  //     if (state.searchQuery) {
  //       return search;
  //     } else {
  //       return state.posts;
  //     }
  //   },
  // },
});
