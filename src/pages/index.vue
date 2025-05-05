<script setup lang="ts">
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/post";

const postStore = usePostStore();
const { getPost } = postStore;

const filteredPosts = computed(() => {
  const search = postStore.posts.filter((item) => {
    return postStore.searchQuery
      .toLowerCase()
      .split(" ")
      .every((v) => item.title.toLowerCase().startsWith(v));
  });

  if (postStore.searchQuery) {
    return search;
  } else {
    return postStore.posts;
  }
});

onMounted(getPost);
</script>

<template>
  <div class="container">
    <input
      type="text"
      class="container__search"
      placeholder="search..."
      v-model="postStore.searchQuery"
    />

    <div class="container_list">
      <Post v-for="post in filteredPosts" :post="post" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  max-width: 1400px;
  margin: auto;
  padding: 40px;

  &_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 10px;
  }
}
</style>
