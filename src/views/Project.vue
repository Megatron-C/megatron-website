<template>
  <div v-if="projectData">
    <title>Megatron - {{ projectData.title }}</title>
  </div>
  <div v-else><title>Megatron</title></div>

  <div v-if="projectData" class="bg-[url(/bgstarstexture.png)]">
    <div class="from-[#0a0020bb] to-[#0000009f] bg-gradient-to-b min-h-screen">
      <header class="relative">
        <div class="h-[40vh] md:h-[60vh] overflow-hidden relative">
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
      <section aria-label="Project details" class="py-10 px-[5vw] md:px-[10vw]">
        <ul
          v-if="projectData.providedServices"
          aria-label="Provided services"
          class="flex flex-wrap gap-4 md:gap-14"
        >
          <li
            v-for="service in projectData.providedServices"
            :key="service"
            class="font-druk-text-wide-trial font-medium md:text-xl"
          >
            {{ service }}
          </li>
        </ul>
        <div class="project-details-body">
          <div>
            <sanity-blocks :blocks="projectData.body" />
          </div>
          <div>
            <sanity-blocks :blocks="projectData.body2" />
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import sanity from "../clients/sanity";
// import { h } from "vue";
// import { url } from "inspector";

export default {
  components: { Footer },
  data() {
    return {
      projectData: null,
      // projectId: "62b0cf58-ecbf-4c72-9075-2ac0e244e102",
      serializers: {
        types: {
          image: (data) => {
            console.log(data);
            // return h("image", { src: data.asset.url });
            // return `<image src='${data.url()}'></image>`;
          },
        },
      },
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
    this.getData();
  },
  methods: {
    // imageUrlFor(source) {
    //   return imageBuilder.image(source);
    // },
    getData() {
      const query = `*[_type=="project"][_id == '${this.$route.params.id}' ]{_id,title,description,"coverImageURL": coverImage.asset->url, body2, body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }, providedServices}`;

      sanity.fetch(query).then((res) => {
        this.projectData = res[0];
        // console.log(res[0]);
        console.log("Done!");
      });
    },
  },
};
</script>

<style>
</style>