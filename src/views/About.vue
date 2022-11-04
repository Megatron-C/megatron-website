<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <section aria-label="Identification" class="my-28">
      <div class="flex justify-center pb-28">
        <h1 hidden>Identification</h1>
        <h2
          class="
            text-3xl
            md:text-4xl
            lg:text-7xl
            uppercase
            font-druk-text-wide-trial font-black
            lg:leading-[85px]
            mb-6
            lg:mb-11
          "
        >
          Better.<br />
          Stronger.
        </h2>
      </div>
      <ul>
        <li v-for="(item, index) in identificationData" :key="index">
          <div class="md:flex gap-28 my-20">
            <div>
              <h3 class="min-w-max uppercase text-xl md:text-3xl mb-4">
                {{ item.title }}
              </h3>
            </div>
            <div>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section aria-label="Pledges" class="my-28">
      <h1 hidden>Pledges</h1>
      <h2
        class="
          text-3xl
          md:text-4xl
          lg:text-7xl
          uppercase
          font-druk-text-wide-trial font-black
          lg:leading-[85px]
          mb-6
          lg:mb-11
        "
      >
        OUR <br />
        THREE <br />
        PLEDGES
      </h2>
      <ul class="grid md:grid-cols-3 gap-6">
        <li
          v-for="(item, index) in pledgesData"
          :key="index"
          :style="{ backgroundColor: item.color }"
        >
          <div
            class="
              w-full
              h-[40vh]
              md:h-[80vh]
              flex
              items-center
              justify-center
              p-7
            "
          >
            <h3 class="text-xl md:text-3xl font-bold uppercase">
              {{ item.text }}
            </h3>
          </div>
        </li>
      </ul>
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

export default {
  data() {
    return {
      identificationData: [
        {
          title: "Who we are",
          desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.",
        },
        {
          title: "Who we are",
          desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.",
        },
        {
          title: "Who we are",
          desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.",
        },
      ],
      pledgesData: [
        { text: "we do something", color: "#ccc" },
        { text: "we dont do bad things", color: "#555" },
        { text: "we are great at what we do", color: "#999" },
      ],
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
  components: { Footer },
};
</script>

<style>
</style>