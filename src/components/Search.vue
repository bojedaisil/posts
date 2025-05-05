<script setup lang="ts">
import { usePostStore } from "@/stores/post";
import { storeToRefs } from "pinia";
import IftaLabel from "primevue/iftalabel";
import InputText from "primevue/inputtext";

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
