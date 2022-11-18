<template>
  <title>Megatron</title>
  <div class="bg-[url(/bgstarstexture.png)] relative">
    <div class="absolute bottom-4 px-[5vw] md:px-[20vw] w-full">
      <img src="/bgshape2.png" alt="" class="w-full" />
    </div>
    <div class="absolute top-24 px-[15vw] w-full">
      <img src="/bgshape7.png" alt="" class="w-full" />
    </div>
    <div
      class="
        from-[#0a0020bb]
        to-[#0000009f]
        bg-gradient-to-b
        xl:px-[13%]
        lg:px-[8%]
        px-6
        relative
      "
    >
      <Hero />
      <section aria-label="Projects" class="py-20">
        <h1 class="hidden">Projects</h1>
        <div v-for="project in 2" :key="project">
          <Project />
        </div>

        <div class="flex flex-col md:flex-row justify-between gap-9">
          <div class="md:w-1/2">
            <p
              class="font-druk-text-wide-trial font-black text-2xl md:text-3xl"
            >
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