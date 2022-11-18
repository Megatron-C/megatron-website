<template>
  <div class="relative">
    <section
      v-if="show"
      class="relative py-24 border-t-2 group flex justify-center"
    >
      <div
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        <video
          class="min-w-full min-h-full absolute object-cover object-center"
          src="/travelingthroughatunnel.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
      </div>

      <router-link
        to="/contact"
        class="
          group-hover:border-[#fff]
          border border-[#fff0]
          duration-300
          z-[2]
        "
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
            hover:bg-[#000000de]
            duration-500
          "
        >
          Let's Collaborate
        </div>
      </router-link>
    </section>
    <footer
      class="xl:px-[13%] lg:px-[8%] px-6 py-36 bg-[#000425] border-t-2 relative"
    >
      <div class="absolute bottom-0 left-0 h-full">
        <img src="/bgshape6.png" alt="" class="w-full h-full" />
      </div>
      <div class="relative">
        <p class="font-druk-wide-trial font-black text-2xl md:text-4xl pb-10">
          Join our mega weekly emails Designers, Founders & Makers
        </p>
        <form @submit.prevent="clk" class="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            v-model="email"
            class="
              w-full
              outline-none
              bg-transparent
              text-4xl
              border-b
              placeholder-white
            "
          />
          <button type="submit" class="w-fit">
            <div
              class="
                font-durk-trail
                hover:bg-white hover:text-black
                border
                text-white
                duration-300
                italic
                font-bold
                text-4xl
                py-3
                px-14
                w-fit
                min-w-max
                uppercase
              "
            >
              Sign me up
            </div>
          </button>
        </form>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      show: true,
    };
  },
  mounted() {
    this.showSection();
  },
  methods: {
    clk() {
      console.log(this.email);
    },
    showSection() {
      if (this.$route.path === "/contact") {
        this.show = false;
      }
    },
  },
};
</script>

<style>
</style>