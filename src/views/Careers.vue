<template>
  <title>Careers at Megatron</title>
  <div class="bg-[url(/bgstarstexture.png)] relative">
    <div class="absolute bottom-4 px-[5vw] md:px-[20vw] w-full">
      <img src="/bgshape2.png" alt="" class="w-full" />
    </div>
    <div class="absolute top-12 px-[15vw] w-full">
      <img src="/bgshape3.png" alt="" class="w-full" />
    </div>
    <div class="from-[#100029a1] to-[#0000009f] bg-gradient-to-b relative">
      <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
        <section aria-label="Careers" class="my-28">
          <h1 hidden>Join us</h1>
          <h2 class="
              text-3xl
              md:text-4xl
              lg:text-7xl
              uppercase
              font-druk-text-wide-trial font-black
              lg:leading-[85px]
              mb-6
              lg:mb-11
            ">
            Make things better with us.
          </h2>
          <p>
            At Megatron, we are a tight knit group of designers, developers, photographers, and storytellers. We know
            how to work hard and have fun doing it. We know that our work doesn’t define us, but it’s an outward
            expression of our passions. We strive to create a healthy environment that helps our team live the life they
            want and work with rad clients.We are always looking for humble creatives who want to work together to push
            their craft and inspire one another.
          </p>
        </section>
      </div>
      <div class="bg-white text-black">
        <section aria-label="Benefits" class="xl:px-[13%] lg:px-[8%] px-6 py-24">
          <h1 class="
              text-2xl
              lg:text-4xl
              uppercase
              font-druk-text-wide-trial font-black
              lg:leading-[85px]
              mb-11
            ">
            Benefits We Offer
          </h1>
          <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-9">
            <li v-for="item in benefits" :key="item">
              <div class="font-druk-text-wide-trial font-bold text-sm w-[80%]">
                {{ item }}
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div class="xl:px-[13%] lg:px-[8%] px-6 py-24">
        <section aria-label="positions" class="flex flex-col md:flex-row gap-16">
          <div>
            <h1 hidden>Positions</h1>
            <h2 class="
                text-2xl
                lg:text-4xl
                uppercase
                font-druk-text-wide-trial font-black
                mb-11
              ">
              No Open Positions
            </h2>
            <p class="
                text-lg
                lg:text-xl
                uppercase
                font-druk-text-wide-trial font-black
                mb-4
              ">
              We currently don’t have any open positions at this moment.
            </p>
            <p>
              If you’re looking to be a part of the Megatron team, make sure
              you sign up for job notifications or reach out to us.
            </p>
          </div>
          <div>
            <!-- <div class="mb-12">
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
              TO-DO: make it send email to firebase in job notification doc
            </div> -->
            <div>
              <h3 class="uppercase font-druk-text-wide-trial font-bold mb-4">
                We are always looking for talents
              </h3>

              <a href="mailto:careers@wearemegatron.com">
                <div class="
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
                  ">
                  Get In Touch
                </div>
              </a>
              <!-- TO-DO: make is go to mail talent@wearemegatron.com -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
  data() {
    return {
      benefits: [
        "Head space",
        "401K & Roth 401K",
        "Bereavement",
        "20+ Days of PTO",
        "Competitive Salary",
        "Critical Illness Insurance",
        "Health, Dental, & Vision Insurance",
        "Basic Life Insurance",
        "Short & Long Term Disability",
        "Supplemental Life Insurance",
        "Hospital Confinement Insurance",
        "FSA & Dependent Care FSA",
        "Maternity / Paternity / Adoption Leave",
        "Quarterly Profit Sharing",
        "Yearly Conference & Education Stipend",
        "12 Paid Holidays",
      ],
    };
  },
  mounted() {
    scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style>

</style>