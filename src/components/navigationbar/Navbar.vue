<template>
  <div class="relative w-full">
    <div
      class="
        flex
        justify-between
        items-center
        xl:px-[13%]
        lg:px-[8%]
        px-6
        duration-300
        fixed
        z-40
        w-full
      "
      :class="{
        'bg-[#000000ee]': onTop,
        'bg-[#0000001a]': !onTop,
      }"
    >
      <div class="py-2">
        <router-link to="/" @click="scrollTop">
          <img
            src="/megatronLogo.svg"
            alt="megatron"
            class="w-32 pointer-events-none"
        /></router-link>
      </div>

      <div v-if="bigScreen" class="flex">
        <div v-for="(item, index) in navLinks" :key="index">
          <router-link :to="item.link" @click="scrollTop"
            ><div
              class="
                xl:py-6
                py-4
                xl:px-10
                px-7
                border border-transparent
                font-medium font-durk-text-trail
                text-xl text-white
                hover:border-b-white
                duration-300
              "
            >
              {{ item.text }}
            </div></router-link
          >
        </div>
        <div>
          <router-link to="/contact" @click="scrollTop"
            ><div
              class="
                xl:py-6
                py-4
                xl:px-16
                px-12
                border border-transparent
                font-medium font-durk-text-trail
                text-xl text-black
                bg-white
                hover:bg-transparent hover:text-white hover:border-b-white
                duration-300
              "
            >
              Contact
            </div></router-link
          >
        </div>
      </div>
      <div v-else>
        <button
          aria-label="show navigation menu"
          @click="() => (sideNav = !sideNav)"
        >
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H30" stroke="currentColor" stroke-width="3" />
            <path d="M0 10H30" stroke="currentColor" stroke-width="3" />
            <path d="M0 18H30" stroke="currentColor" stroke-width="3" />
          </svg>
        </button>

        <SideNav
          :class="{ 'left-[50vw]': sideNav, 'left-[100vw]': !sideNav }"
          @close="() => (sideNav = !sideNav)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "./SideNav.vue";
export default {
  components: { SideNav },
  data() {
    return {
      bigScreen: innerWidth > 720,
      onTop: scrollY > 100,
      sideNav: false,
      navLinks: [
        { text: "Work", link: "/work" },
        { text: "About", link: "/about" },
        { text: "Careers", link: "/careers" },
      ],
    };
  },
  computed: {
    // projectPage() {
    //   return this.$route.fullPath === "/project/?";
    // },
  },
  mounted() {
    addEventListener("resize", () => (this.bigScreen = innerWidth > 720));
    addEventListener("scroll", () => (this.onTop = scrollY > 100));
  },
  unmounted() {
    removeEventListener("resize", () => (this.bigScreen = innerWidth > 720));
    removeEventListener("scroll", () => (this.onTop = scrollY > 100));
  },
  methods: {
    scrollTop() {
      scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>