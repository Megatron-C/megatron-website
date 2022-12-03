<template>
  <title>About Megatron</title>
  <div class="bg-[url(/bgstarstexture.png)] relative">
    <!-- <div class="absolute bottom-4 px-[5vw] md:px-[20vw] w-full">
      <img src="/bgshape2.png" alt="" class="w-full" />
    </div> -->
    <div class="absolute top-0 w-full opacity-70">
      <img src="/bgshape8.png" alt="" class="w-full" />
    </div>
    <!-- <div class="absolute left-[-10vw] top-[140vh] w-[50vw]">
      <img src="/bgshape4.png" alt="" class="w-full -rotate-90" />
    </div> -->
    <div class="from-[#0a001bb4] to-[#0000009f] bg-gradient-to-b relative">
      <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
        <section aria-label="Identification" class="my-28">
          <div class="pb-28">
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
    </div>
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
          title: "What we do",
          desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.",
        },
        {
          title: "How we do it",
          desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.",
        },
      ],
      pledgesData: [
        { text: "Familiarity", color: "#1a252a" },
        { text: "Surprise", color: "#281917" },
        { text: "Context", color: "#2e2e1b" },
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