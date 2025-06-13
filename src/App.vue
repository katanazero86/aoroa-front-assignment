<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
console.log('App.vue', import.meta.env, import.meta.env.VITE_MODE)
</script>

<style scoped></style>
