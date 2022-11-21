<template>
  <div class="my-16 relative group" tabindex="0">
    <div
      class="
        hidden
        md:block
        absolute
        overflow-hidden
        w-full
        h-full
        group-hover:blur-[30px]
        duration-[1500ms]
      "
    >
      <img
        class="w-full h-full object-cover"
        :src="projectData.coverImageURL"
        :alt="projectData.title"
      />
    </div>
    <div class="aspect-[2/1] overflow-hidden relative">
      <img
        class="w-full h-full object-cover"
        :src="projectData.coverImageURL"
        :alt="projectData.title"
      />
    </div>
    <div
      class="
        pt-5
        md:p-14
        flex flex-col
        justify-between
        gap-3
        md:absolute md:text-black
        top-0
        h-full
        w-full
      "
    >
      <div class="mt-auto">
        <h3
          class="
            font-black
            text-xl
            md:text-5xl
            font-druk-text-wide-trial
            md:w-[50%]
            mb-6
            md:mb-8
          "
        >
          {{ projectData.title }}
        </h3>
        <p class="text-xl md:w-[50%] mb-4 md:mb-8">
          {{ projectData.description }}
        </p>
        <router-link
          :to="`/project/${projectData._id}`"
          class="
            w-fit
            font-druk-trial
            uppercase
            text-lg
            md:text-3xl
            font-bold
            flex
            items-center
            gap-1
            hover:gap-3
            duration-300
          "
        >
          view project
          <svg
            class="inline ml-2 w-6 md:w-11"
            width="100%"
            height="100%"
            viewBox="0 0 43 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807614 30.9792 0.807614 30.3934 1.3934C29.8076 1.97919 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM2 13.5L41 13.5L41 10.5L2 10.5L2 13.5Z"
              fill="currentColor"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
};
</script>

<style>
</style>