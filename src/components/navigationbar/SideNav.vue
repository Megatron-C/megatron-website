<template>
  <div class="fixed bg-[#000000] top-0 bottom-0 right-0 duration-500 z-50">
    <div class="p-5">
      <button aria-label="hide navigation menu" @click="() => $emit('close')">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 23L23.2132 1.7868"
            stroke="currentColor"
            stroke-width="3"
          />
          <path
            d="M23 23L1.7868 1.7868"
            stroke="currentColor"
            stroke-width="3"
          />
        </svg>
      </button>

      <div>
        <div v-for="(item, index) in navLinks" :key="index">
          <router-link :to="item.link" tabindex="-1" @click="scrollTop"
            ><div
              class="
                py-6
                px-3
                mb-1
                border border-transparent
                font-medium font-durk-text-trail
                text-center text-xl text-white
                hover:border-b-white
                duration-300
              "
            >
              {{ item.text }}
            </div></router-link
          >
        </div>
        <div>
          <router-link tabindex="-1" to="/contact" @click="scrollTop"
            ><div
              class="
                py-6
                px-5
                border border-transparent
                font-medium font-durk-text-trail
                text-center text-xl text-black
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { text: "Work", link: "/work" },
        { text: "About", link: "/about" },
        { text: "Careers", link: "/careers" },
      ],
    };
  },
  methods: {
    scrollTop() {
      scrollTo({ top: 0, behavior: "smooth" });
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>