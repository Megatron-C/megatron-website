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
              <div class="md:flex my-20 w-full">
                <div class="md:w-[35%] 2xl:w-[22%]">
                  <h3
                    class="
                      font-druk-text-wide-trial
                      min-w-max
                      uppercase
                      text-xl
                      md:text-2xl
                      mb-4
                    "
                  >
                    {{ item.title }}
                  </h3>
                </div>
                <div class="md:w-[65%] 2xl:w-[78%]">
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
              <div class="w-full md:h-[80vh] p-7">
                <h3
                  class="
                    text-3xl
                    md:text-xl
                    lg:text-3xl
                    font-druk-text-wide-trial font-black
                    uppercase
                    block
                  "
                >
                  {{ item.text }}
                </h3>
                <p class="mt-8 text-sm">{{ item.desc }}</p>
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
          desc: "We are a creative force, run by creatives to put a dent in corporate business conventions and vanquish design mediocrity; we’re driven by a magnetic culture, with empowered people as our lifeblood.",
        },
        {
          title: "What we do",
          desc: "At the heart of Megatron is a strategic force like no other: a source of information, inspiration and the straightest line to the best possible creative work.",
        },
        {
          title: "How we do it",
          desc: "Sensory Brand World forms the bedrock of all our creative output via a human-centric approach.",
        },
      ],
      pledgesData: [
        {
          text: "Familiarity",
          color: "#1a252a",
          desc: "The degree to which a customer recognizes brand components and views their interaction as natural; the similarity of the interface to concrete objects the user has interacted with in the past. brand identity can be familiar by mimicking the visual appearance of real-world objects, by relying on standardized commands, or by following other common metaphors.",
        },
        {
          text: "Surprise",
          color: "#281917",
          desc: "A surprise reaction to a product can be beneficial to both the clint and a user. The clint benefits from a surprise reaction because it can capture attention to the product, leading to increased product recall and recognition, and increased word-of-mouth. Or it can be described as, the surprise element elevates a piece beyond the banal. A surprise reaction has its origin in encountering an unexpected event. The product user benefits from the surprise, because it makes the product more interesting to interact with.",
        },
        {
          text: "Context",
          color: "#2e2e1b",
          desc: "Context is when to be familiar and when to be fun, it needs to be keen on creating useful designs that suit the context of how and where users are using them.",
        },
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