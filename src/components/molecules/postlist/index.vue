<script setup lang="ts">
import { onMounted } from "vue";
import { usePostStore } from "@/stores/post";

const postStore = usePostStore();
const { getPost } = postStore;

onMounted(getPost);
</script>

<template>
  <div class="postlist">
    <post v-for="post in postStore.filteredPosts" :post="post" />
  </div>
</template>

<style scoped>
.postlist {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 10px;
}
@media screen and (max-width: 1000px) {
  .postlist {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 666px) {
  .postlist {
    grid-template-columns: 1fr;
  }
}
</style>
