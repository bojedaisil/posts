<script setup lang="ts">
import { usePostStore } from "@/stores/post";
import { storeToRefs } from "pinia";

const postStore = usePostStore();
const { searchQuery } = storeToRefs(postStore);
</script>

<template>
  <div>
    <IftaLabel>
      <InputText id="username" v-model="searchQuery" variant="filled" />
      <label for="">Search</label>
    </IftaLabel>
  </div>
</template>

<style scoped></style>
