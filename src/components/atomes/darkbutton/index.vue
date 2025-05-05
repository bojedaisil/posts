<script setup lang="ts">
import { usePostStore } from "@/stores/post";
const postStore = usePostStore();
</script>

<template>
  <prime-button
    icon="pi pi-moon"
    @click="postStore.toggleDarkMode()"
    severity="secondary"
  />
</template>

<style scoped></style>
