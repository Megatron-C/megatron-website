<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6">
    <Hero />
    <section aria-label="Projects" class="py-20">
      <h1 class="hidden">Projects</h1>
      <div v-for="project in 4" :key="project">
        <Project />
      </div>

      <div class="flex flex-col md:flex-row justify-between gap-9">
        <div class="md:w-1/2">
          <p class="font-druk-text-wide-trial font-black text-2xl md:text-3xl">
            Dig into a few of our most impactful projects.
          </p>
        </div>
        <div class="">
          <p class="font-bold pb-7">Want to see more case studies?</p>
          <router-link to="/work" class="w-fit"
            ><div
              class="
                font-durk-trail
                bg-white
                text-black
                border
                hover:bg-transparent hover:text-white
                duration-300
                italic
                font-bold
                text-4xl
                py-3
                px-12
                w-fit
              "
            >
              View Our Work
            </div></router-link
          >
        </div>
      </div>
    </section>
    <div class="py-12">
      <p
        class="
          font-druk-text-wide-trial font-black
          text-2xl
          md:text-4xl
          text-center
        "
      >
        We are reshaping the industry
      </p>
    </div>
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
  <!-- <div class="h-screen"></div> -->
</template>

<script>
import Footer from "../components/Footer.vue";
import Hero from "../components/home/Hero.vue";
import Project from "../components/Project.vue";
export default {
  components: { Hero, Project, Footer },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style>
</style>