<script setup lang="ts">
defineProps({
  post: Object,
});
</script>

<template>
  <Card class="post">
    <template #title class="post__title">
      {{ post.title }}
    </template>
    <template #content>
      <p class="m-0 post__body">
        {{ post.body }}
      </p>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.post {
  &__title {
    font-size: 20px;
    font-weight: bolder;
  }
  &__body {
    font-size: 16px;
    font-family: "NotoSerif", sans-serif;
  }
}
</style>
