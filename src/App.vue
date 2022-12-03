<script setup>
// This starter template is using Vue 3 <script setup> SFCs

import Navbar from "./components/navigationbar/Navbar.vue";

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="bg-[#181818] min-h-screen text-white">
    <Navbar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style scoped>
</style>
