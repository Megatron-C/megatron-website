<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <section aria-label="Projects">
      <h1 class="hidden">Projects</h1>
      <div v-for="project in 4" :key="project">
        <project />
      </div>
    </section>
  </div>
  <div class="py-24 bg-slate-400 group flex justify-center">
    <router-link
      to="/contact"
      class="group-hover:border-[#fff] border border-[#fff0] duration-300"
    >
      <div
        class="
          font-druk-text-wide-trial font-black
          py-2
          px-5
          w-fit
          mx-auto
          text-2xl
          md:text-4xl
          hover:bg-[#000000c4]
          duration-500
        "
      >
        Let's Collaborate
      </div>
    </router-link>
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