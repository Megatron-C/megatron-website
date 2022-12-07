<template>
  <div class="relative">
    <section v-if="showCollaborate" class="relative py-60 border-t-2 group flex justify-center">
      <div class="
          absolute  
          top-0
          left-0
          w-full
          h-full
          overflow-hidden
          flex
          items-center
          justify-center
        ">
        <!-- <video
          class="min-w-full min-h-full absolute object-cover object-center"
          src="/travelingthroughatunnel.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video> -->
        <div class="
        w-screen
        h-10
        bg-white">

        </div>
        <video id="footer_video" class="min-w-full min-h-full absolute object-cover object-center"
          src="/throughspace.mp4" type="video/mp4" autoplay muted loop></video>
      </div>

      <router-link to="/contact" class="
          group-hover:border-[#fff]
          border border-[#fff0]
          duration-300
          z-[2]
        ">
        <div class="
            font-druk-text-wide-trial font-black
            py-2
            px-5
            w-fit
            mx-auto
            text-2xl
            md:text-4xl
            hover:bg-[#242424de]
            duration-500
          ">
          Let's Collaborate
        </div>
      </router-link>
    </section>
    <footer class="xl:px-[13%] lg:px-[8%] px-6 py-36 bg-[#030303] border-t-2 relative">
      <div class="absolute bottom-0 left-0 h-full">
        <img src="/bgshape6.png" alt="" class="w-full h-full" />
      </div>
      <div v-if="!showNextButton" class="relative">
        <div v-if="thankYouMessage">
          <p class="font-druk-wide-trial text-lg md:text-xl pb-10">
            Thank You For Signing To Our mega weekly emails
          </p>
        </div>
        <div v-else>
          <p class="font-druk-text-wide-trial font-black text-3xl uppercase md:text-5xl pb-10  md:w-[60vw]">
            Join our mega weekly newsletter for Designers, Founders & Makers
          </p>
          <form @submit.prevent="addEmail" class="flex flex-col md:flex-row gap-4 md:w-[60vw]">
            <input type="email" placeholder="Email" required v-model="email" class="
                w-full
                outline-none
                bg-transparent
                text-2xl
                border-b
                placeholder-white
              " />
            <button type="submit" class="w-fit disabled:pointer-events-none disabled:opacity-75"
              :disabled="buttonLoading">
              <div class="
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
                ">
                Sign me up
              </div>
            </button>
          </form>
        </div>
      </div>
      <div v-if="showNextButton" class="relative">
        <p class="font-druk-wide-trial font-black text-2xl md:text-4xl pb-10">
          Like what you see?
        </p>
        <button @click="nextProject" class="z-[2]">
          <div class="
              border-[#fff] border
              font-druk-text-wide-trial font-black
              py-2
              px-5
              w-fit
              mx-auto
              text-2xl
              md:text-4xl
              hover:bg-[#ffffffde] hover:text-black
              duration-500
            ">
            Next Project
          </div>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import sanity from "../clients/sanity";
import firebase from "../clients/firebase";

export default {
  data() {
    return {
      email: "",
      projectsIds: null,
      buttonLoading: false,
      thankYouMessage: false,
    };
  },
  computed: {
    showCollaborate() {
      return this.$route.path !== "/contact";
    },
    showNextButton() {
      return this.$route.matched[0].path === "/project/:id";
    },
  },
  mounted() {
    this.getData();
    this.setVideoPlaySpeed();
  },
  methods: {
    getData() {
      const query = '*[_type=="project"]{_id}';

      if (this.showNextButton) {
        sanity.fetch(query).then((res) => {
          this.projectsIds = res;
        });
      }
    },
    nextProject() {
      if (this.projectsIds) {
        let currentIdIndex = this.projectsIds
          .map((obj) => obj._id)
          .indexOf(`${this.$route.params.id}`);

        let next =
          currentIdIndex + 1 == this.projectsIds.length
            ? this.projectsIds[0]._id
            : this.projectsIds[currentIdIndex + 1]._id;

        this.$router.push(`/project/${next}`);
      }
    },
    async addEmail() {
      this.buttonLoading = true;
      firebase.addEmail(this.email).then(() => {
        this.buttonLoading = false;
        this.email = "";
        this.thankYouMessage = true;
      });
    },
    setVideoPlaySpeed() {
      const vid = document.getElementById("footer_video");
      if (vid) {
        vid.playbackRate = 1;
      }
    },
  },
};
</script>

<style>

</style>