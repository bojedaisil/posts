<script setup lang="ts">
import { onMounted } from "vue";
import { usePostStore } from "@/stores/post";
import Button from "primevue/button";

const postStore = usePostStore();
const { getPost } = postStore;

onMounted(getPost);
</script>

<template>
  <div class="container">
    <Button
      icon="pi pi-moon"
      @click="postStore.toggleDarkMode()"
      severity="secondary"
    />
    <Search />
    <div class="container_list">
      <Post v-for="post in postStore.filteredPosts" :post="post" />
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
