<template>
  <div class="h-[90vh] relative">
    <div class="h-full flex items-center justify-center">
      <div>
        <h1
          class="
            text-center text-2xl
            md:text-4xl
            lg:text-7xl
            uppercase
            font-druk-text-wide-trial font-black
            lg:leading-[85px]
            mb-6
            lg:mb-11
          "
        >
          Design & <br />
          Development.
        </h1>
        <p class="text-center font-light max-w-[950px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
          officiis obcaecati perspiciatis illum officia fugiat reiciendis
          pariatur nostrum harum soluta tempora omnis quaerat inventore eveniet
          labore, amet nisi repudiandae beatae.
        </p>
      </div>
      <div class="absolute bottom-1 arrow-bounce">
        <svg
          width="24"
          height="115"
          viewBox="0 0 24 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 114.061C11.5251 114.646 12.4749 114.646 13.0607 114.061L22.6066 104.515C23.1924 103.929 23.1924 102.979 22.6066 102.393C22.0208 101.808 21.0711 101.808 20.4853 102.393L12 110.879L3.51471 102.393C2.92893 101.808 1.97918 101.808 1.39339 102.393C0.807607 102.979 0.807607 103.929 1.39339 104.515L10.9393 114.061ZM10.5 -6.55671e-08L10.5 113L13.5 113L13.5 6.55671e-08L10.5 -6.55671e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.arrow-bounce {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%,
  25%,
  50%,
  75% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-7px);
  }
  60% {
    transform: translateY(-3px);
  }
}
</style>