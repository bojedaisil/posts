<script setup lang="ts">
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>

<template>
  <prime-button
    icon="pi pi-moon"
    @click="toggleDarkMode()"
    severity="secondary"
  />
</template>

<style scoped></style>
