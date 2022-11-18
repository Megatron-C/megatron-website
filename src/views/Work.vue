<template>
  <title>What Megatron did</title>
  <div class="bg-[url(/bgstarstexture.png)] relative">
    <div class="absolute bottom-4 px-[5vw] md:px-[20vw] w-full">
      <img src="/bgshape2.png" alt="" class="w-full" />
    </div>
    <div class="absolute top-3 px-[25vw] w-full">
      <img src="/bgshape3.png" alt="" class="w-full" />
    </div>
    <div
      class="
        from-[#001124a1]
        to-[#0000009f]
        bg-gradient-to-b
        xl:px-[13%]
        lg:px-[8%]
        px-6
        py-24
        relative
      "
    >
      <section aria-label="Projects">
        <h1 class="hidden">Projects</h1>
        <div v-for="project in 4" :key="project">
          <project />
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Project from "../components/Project.vue";
export default {
  components: { Project, Footer },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style>
</style>