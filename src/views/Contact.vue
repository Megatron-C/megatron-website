<template>
  <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
    <section aria-label="Contact" class="my-28">
      <h1 hidden>Contact us</h1>
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
        HIT US UP
      </h2>
      <form @submit.prevent="">
        <input
          type="text"
          placeholder="What is your name?"
          required
          v-model="userName"
          class="w-full outline-none bg-transparent text-4xl border-b p-2 my-10"
        />
        <input
          type="email"
          placeholder="What is your email?"
          required
          v-model="email"
          class="w-full outline-none bg-transparent text-4xl border-b p-2 my-10"
        />
        <input
          list="services"
          placeholder="What can we help you with?"
          required
          v-model="selectedSrevice"
          class="w-full outline-none bg-transparent text-4xl border-b p-2 my-10"
        />
        <datalist id="services">
          <option v-for="item in services" :key="item" :value="item"></option>
        </datalist>

        <input
          type="text"
          placeholder="About the project"
          required
          v-model="desc"
          class="w-full outline-none bg-transparent text-4xl border-b p-2 my-10"
        />
        <input
          list="budgets"
          placeholder="What is your budget?"
          required
          v-model="selectedBudget"
          class="w-full outline-none bg-transparent text-4xl border-b p-2 my-10"
        />
        <datalist id="budgets">
          <option v-for="item in budgets" :key="item" :value="item"></option>
        </datalist>
        <button type="submit">
          <div
            class="
              font-durk-trail
              bg-white
              text-black
              hover:bg-black hover:text-white
              duration-300
              italic
              font-bold
              text-4xl
              py-3
              px-14
              min-w-max
              uppercase
              my-10
            "
          >
            Submit
          </div>
        </button>
      </form>
    </section>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      services: ["design", "logo", "UI", "UX"],
      budgets: ["$5,000+", "$10,000+", "$50,000+", "$100,000+"],
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="css" scoped>
::placeholder {
  color: white;
}
</style>