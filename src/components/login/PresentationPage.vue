<template>
  <svg
    class="curve-top"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#71B86F"
      fill-opacity="1"
      d="M0,32L24,26.7C48,21,96,11,144,32C192,53,240,107,288,117.3C336,128,384,96,432,101.3C480,107,528,149,576,181.3C624,213,672,235,720,224C768,213,816,171,864,176C912,181,960,235,1008,240C1056,245,1104,203,1152,154.7C1200,107,1248,53,1296,58.7C1344,64,1392,128,1416,160L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
    ></path>
  </svg>
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
  <svg
    class="curve-bottom"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#71B86F"
      fill-opacity="1"
      d="M0,160L24,176C48,192,96,224,144,218.7C192,213,240,171,288,181.3C336,192,384,256,432,282.7C480,309,528,299,576,261.3C624,224,672,160,720,144C768,128,816,160,864,181.3C912,203,960,213,1008,186.7C1056,160,1104,96,1152,64C1200,32,1248,32,1296,53.3C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss">
.curve-bottom {
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.curve-top {
  position: absolute;
  top: 0;
  z-index: -1;
}

// .nested-leave-active {
//   transition: all 1.5s ease-in-out;
// }
// .nested-leave-to {
//   transform: translateX(-300px);
//   opacity: 0;
// }

// .nested-enter-active,
// .nested-enter-from {
//   transform: translateX(300px);
//   opacity: 0;
// }
// .nested-enter-active {
//   transition-delay: 0.55s;
// }

.page-leave-active,
.page-enter-active {
  transition: transform 0.5s ease;
}

.page-leave-active {
  transform: translateX(-100%);
}

.page-enter {
  transform: translateX(100%);
}

.page-enter-active {
  transform: translateX(0);
}
</style>
