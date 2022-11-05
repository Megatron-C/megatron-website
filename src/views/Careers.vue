<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <section aria-label="Careers" class="my-28">
      <h1 hidden>Join us</h1>
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
        Make things better with us.
      </h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem c.
      </p>
    </section>
  </div>
  <div class="bg-white text-black">
    <section aria-label="Benefits" class="xl:px-[13%] lg:px-[8%] px-6 py-24">
      <h1
        class="
          text-2xl
          lg:text-4xl
          uppercase
          font-druk-text-wide-trial font-black
          lg:leading-[85px]
          mb-11
        "
      >
        Benefits We Offer
      </h1>
      <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-9">
        <li v-for="(item, index) in 18" :key="index">
          <div class="font-druk-text-wide-trial font-bold">
            {{ item + " WTF" }}
          </div>
        </li>
      </ul>
    </section>
  </div>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <section aria-label="positions" class="flex flex-col md:flex-row gap-16">
      <div>
        <h1 hidden>Positions</h1>
        <h2
          class="
            text-2xl
            lg:text-4xl
            uppercase
            font-druk-text-wide-trial font-black
            mb-11
          "
        >
          No Open Positions
        </h2>
        <p
          class="
            text-lg
            lg:text-xl
            uppercase
            font-druk-text-wide-trial font-black
            mb-4
          "
        >
          We currently don’t have any open positions at this moment.
        </p>
        <p>
          If you’re looking to be a part of the Underbelly team, make sure you
          sign up for job notifications or reach out to us.
        </p>
      </div>
      <div>
        <div class="mb-12">
          <h3 class="uppercase font-druk-text-wide-trial font-bold mb-4">
            Sign up for job notifications
          </h3>
          <router-link to="/contact">
            <div
              class="
                font-druk-text-wide-trial font-black
                py-2
                px-5
                w-fit
                text-lg
                italic
                bg-white
                text-black
                hover:bg-black hover:text-white
                duration-500
              "
            >
              Subscribe
            </div>
          </router-link>
        </div>
        <div>
          <h3 class="uppercase font-druk-text-wide-trial font-bold mb-4">
            We are always looking for talent
          </h3>
          <router-link to="/contact">
            <div
              class="
                font-druk-text-wide-trial font-black
                py-2
                px-5
                w-fit
                text-lg
                italic
                bg-white
                text-black
                hover:bg-black hover:text-white
                duration-500
              "
            >
              Get In Touch
            </div>
          </router-link>
        </div>
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

export default {
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
  components: { Footer },
};
</script>

<style>
</style>