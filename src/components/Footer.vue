<template>
  <footer class="xl:px-[13%] lg:px-[8%] px-6 py-36 bg-black">
    <p class="font-druk-wide-trial font-black text-2xl md:text-4xl pb-10">
      Join our mega weekly emails Designers, Founders & Makers
    </p>
    <form @submit.prevent="clk" class="flex flex-col md:flex-row gap-4">
      <input
        type="email"
        placeholder="Email"
        required
        v-model="email"
        class="w-full outline-none bg-transparent text-4xl border-b"
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
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    clk() {
      console.log(this.email);
    },
  },
};
</script>

<style>
</style>