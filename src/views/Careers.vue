<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <div>Careers Page</div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style>
</style>