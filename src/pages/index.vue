<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  completed?: boolean;
}

const limit = ref(10);
const posts = ref<Post[]>([]);
const searchQuery = ref("");

const getPosts = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit.value}`;
    const responce = await fetch(url);
    const data: Post[] = await responce.json();
    console.log(data);
    posts.value = data;
  } catch (err) {
    console.log(err);
  }
};

const filteredPosts = computed(() => {
  if (searchQuery.value) {
    return posts.value.filter((item) => {
      return searchQuery.value
        .toLowerCase()
        .split(" ")
        .every((v) => item.title.toLowerCase().startsWith(v));
    });
  } else {
    return posts.value;
  }
});

onMounted(getPosts);
</script>

<template>
  <div class="container">
    <input
      type="text"
      class="container__search"
      placeholder="search..."
      v-model="searchQuery"
    />

    <div class="container_list">
      <Photo v-for="post in filteredPosts" :post="post" />
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
