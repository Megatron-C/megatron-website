<template>
  <div v-if="projectData">
    <title>Megatron - {{ projectData.title }}</title>
  </div>
  <div v-else>
    <title>Megatron</title>
  </div>

  <div v-if="projectData">
    <div
      class="min-h-screen"
      :style="`background: linear-gradient(${projectData.bgColor}, #000000)`"
    >
      <header class="relative">
        <div class="h-[70vh] md:h-[90vh] overflow-hidden relative">
          <img
            class="w-full h-full object-cover"
            :src="projectData.coverImageURL"
            :alt="projectData.title"
          />
        </div>
        <div
          class="
            mt-auto
            p-5
            md:p-14
            absolute
            flex
            items-end
            text-black
            top-0
            h-full
            w-full
          "
        >
          <div class="w-full">
            <h1
              class="
                font-black
                text-xl
                md:text-5xl
                font-druk-text-wide-trial
                mb-3
                md:mb-8
              "
            >
              {{ projectData.title }}
            </h1>
            <p class="md:text-xl">
              {{ projectData.description }}
            </p>
          </div>
        </div>
      </header>
      <section aria-label="Project details" class="py-10">
        <ul
          v-if="projectData.providedServices"
          aria-label="Provided services"
          class="flex flex-wrap gap-4 md:gap-14 px-[5vw] md:px-[10vw]"
        >
          <li
            v-for="service in projectData.providedServices"
            :key="service"
            class="font-druk-text-wide-trial font-medium md:text-xl"
          >
            {{ service }}
          </li>
        </ul>
        <div class="project-details-body" v-if="projectData.body">
          <sanity-blocks
            :blocks="projectData.body"
            :serializers="serializers"
          />
        </div>
      </section>
    </div>
  </div>
  <div v-else class="min-h-screen bg-[#000] flex items-center justify-center">
    <Loader />
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import sanity from "../clients/sanity";
import SanityImage from "../components/sanity/SanityImage.vue";
import Loader from "../assets/Loader.vue";

export default {
  components: { Footer, Loader },
  data() {
    return {
      projectData: null,
      serializers: {
        types: {
          image: SanityImage,
        },
      },
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
    this.getData();
  },
  methods: {
    getData() {
      const query = `*[_type=="project"][_id == '${this.$route.params.id}' ]{_id,title,description, bgColor,"coverImageURL": coverImage.asset->url, body[]{
        ...,
        _type == "image" => {
        ...,
        asset->{url}
      }
      }, providedServices}`;

      sanity
        .fetch(query)
        .then((res) => {
          this.projectData = res[0];
        })
        .then(() => {
          scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },
};
</script>

<style>
.project-details-body {
  /* for customizing sanity block content */
}

.project-details-body p:not(:empty) {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

.project-details-body img {
  margin-top: 2rem;
  margin-bottom: 2rem;
  pointer-events: none;
}

@media (min-width: 780px) {
  .project-details-body p:not(:empty) {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    padding-right: 15vw;
    padding-left: 15vw;
  }

  .project-details-body img {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
  }
}
</style>