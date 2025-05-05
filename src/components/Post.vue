<script setup lang="ts">
defineProps({
  post: Object,
});
</script>

<template>
  <div>
    <div class="post">
      <p class="post__title">{{ post.title }}</p>
      <p class="post__body">{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
