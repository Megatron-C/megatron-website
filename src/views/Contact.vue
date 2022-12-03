<template>
  <title>Contact Megatron</title>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        id="contact-video"
        class="min-w-full min-h-full absolute object-cover object-center"
        src="/throughspace.mp4"
        type="video/mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div
      class="
        relative
        z-[1]
        xl:px-[13%]
        lg:px-[8%]
        px-6
        py-24
        from-[#000000e5]
        to-[#000000be]
        bg-gradient-to-b
      "
    >
      <section aria-label="Contact" class="my-28">
        <h1 hidden>Contact us</h1>
        <div v-if="thankYouMessage">
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
            Thank You
          </h2>
          <p class="font-druk-wide-trial text-lg md:text-xl pb-10">
            let's keep it up
          </p>
        </div>
        <div v-else>
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
          <form @submit.prevent="addClient">
            <div class="my-10">
              <label
                for="user_name"
                class="uppercase font-druk-text-wide-trial text-lg"
                >Name</label
              >
              <input
                id="user_name"
                type="text"
                placeholder="What is your name?"
                required
                v-model="userName"
                class="w-full outline-none bg-transparent text-lg border-b p-2"
              />
            </div>
            <div class="my-10">
              <label
                for="email"
                class="uppercase font-druk-text-wide-trial text-lg"
                >email</label
              >
              <input
                id="email"
                type="email"
                placeholder="What is your email?"
                required
                v-model="email"
                class="w-full outline-none bg-transparent text-lg border-b p-2"
              />
            </div>
            <div class="my-10">
              <label
                for="services_input"
                class="uppercase font-druk-text-wide-trial text-lg"
                >service</label
              >
              <input
                id="services_input"
                list="services"
                placeholder="What can we help you with?"
                required
                v-model="selectedService"
                class="w-full outline-none bg-transparent text-lg border-b p-2"
              />
              <datalist id="services">
                <option
                  v-for="item in services"
                  :key="item"
                  :value="item"
                ></option>
              </datalist>
            </div>
            <div class="my-10">
              <label
                for="desc"
                class="uppercase font-druk-text-wide-trial text-lg"
                >description</label
              >
              <input
                id="desc"
                type="text"
                placeholder="About the project"
                required
                v-model="desc"
                class="w-full outline-none bg-transparent text-lg border-b p-2"
              />
            </div>
            <div class="my-10">
              <label
                for="budget"
                class="uppercase font-druk-text-wide-trial text-lg"
                >budget</label
              >
              <input
                id="budget"
                list="budgets"
                placeholder="What is your budget?"
                required
                v-model="selectedBudget"
                class="w-full outline-none bg-transparent text-lg border-b p-2"
              />
              <datalist id="budgets">
                <option
                  v-for="item in budgets"
                  :key="item"
                  :value="item"
                ></option>
              </datalist>
            </div>

            <button
              type="submit"
              class="disabled:pointer-events-none disabled:opacity-75"
              :disabled="buttonLoading"
            >
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
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import firebase from "../clients/firebase";

export default {
  components: { Footer },
  data() {
    return {
      services: ["design", "logo", "UI", "UX"],
      budgets: ["$5,000+", "$10,000+", "$50,000+", "$100,000+"],
      userName: null,
      email: null,
      selectedService: null,
      desc: null,
      selectedBudget: null,
      buttonLoading: false,
      thankYouMessage: false,
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
    this.setVideoPlaySpeed();
  },
  methods: {
    setVideoPlaySpeed() {
      let vid = document.getElementById("contact-video");
      vid.playbackRate = 0.3;
    },
    async addClient() {
      this.buttonLoading = true;
      firebase
        .addClient(
          this.selectedBudget,
          this.desc,
          this.email,
          this.selectedService,
          this.userName
        )
        .then(() => {
          this.selectedBudget = null;
          this.desc = null;
          this.email = null;
          this.selectedService = null;
          this.userName = null;
          this.thankYouMessage = true;
          scrollTo({ top: 0, behavior: "smooth" });
        });
    },
  },
};
</script>

<style lang="css" scoped>
::placeholder {
  color: white;
}
</style>