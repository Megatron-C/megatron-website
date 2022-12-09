<template>
  <title>Megatron</title>
  <!-- <BackgroundSky class="" /> -->
  <div class="relative bg-[url(/bgstarstexture.png)]">
    <div class="absolute bottom-4 px-[5vw] md:px-[20vw] w-full">
      <img src="/bgshape2.png" alt="" class="w-full" />
    </div>
    <!-- <div class="absolute top-24 px-[15vw] w-full">
      <img src="/bgshape7.png" alt="" class="w-full" />
    </div> -->
    <div class="from-[#06001494] to-[#00000081] bg-gradient-to-b relative">
      <Hero />
      <div class="xl:px-[13%] lg:px-[8%] px-6">
        <section aria-label="Projects" class="py-20">
          <h1 class="hidden">Projects</h1>
          <div v-for="project in projectsData" :key="project._id">
            <Project :projectData="project" />
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-9">
            <div class="md:w-1/2">
              <p
                class="
                  font-druk-text-wide-trial font-black
                  text-2xl
                  md:text-3xl
                  uppercase
                "
              >
                Dig into a few of our most impactful projects.
              </p>
            </div>
            <div class="">
              <p class="font-bold pb-7">Ready to see more?</p>
              <router-link to="/work" class="w-fit">
                <div
                  class="
                    font-durk-trail
                    rounded-[1px]
                    bg-white
                    text-black
                    border
                    hover:bg-transparent hover:text-white
                    duration-300
                    italic
                    font-light
                    text-3xl
                    py-3
                    px-12
                    w-fit
                  "
                >
                  View Our Work
                </div>
              </router-link>
            </div>
          </div>
        </section>
        <div class="py-14">
          <p
            class="
              text-center text-xl
              md:text-3xl
              lg:text-6xl
              uppercase
              font-druk-text-wide-trial font-black
              lg:leading-[85px]
            "
          >
            Ready to transform your business?
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Hero from "../components/home/Hero.vue";
import Project from "../components/Project.vue";
import sanity from "../clients/sanity";
import BackgroundSky from "../assets/BackgroundSky.vue";

export default {
  components: { Hero, Project, Footer, BackgroundSky },
  data() {
    return {
      projectsData: null,
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
    this.getData();
  },
  methods: {
    getData() {
      const query =
        '*[_type=="project"]{_id,title,description,"coverImageURL": coverImage.asset->url}[0...3]';

      sanity.fetch(query).then((res) => {
        this.projectsData = res;
      });
    },
  },
};
</script>

<style>
</style>