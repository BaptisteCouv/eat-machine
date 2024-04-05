<template>
  <div class="picture-home d-flex">
    <v-img aspect-ratio="4/3" src="../../assets/Humaaans - Space.png"></v-img>
  </div>
  <div class="title-app mt-10">
    <div class="title">Eat machine</div>
    <div class="desc">manger mieux c'est mieux</div>
  </div>
  <div class="svg-picture">
    <v-img aspect-ratio="4/3" src="../../assets/Vector-1.svg"></v-img>
  </div>
  <div class="button-app">
    <v-btn class="btn-start" rounded="xl" size="x-large" block>Commencer</v-btn>
    <v-btn class="btn-login mt-4" variant="text" rounded="xl" size="large" block
      >Connexion</v-btn
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "FirstPageConnection",
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";

.title-app {
  text-align: center;
  .title {
    color: $primary-color;
    font-size: 40px;
    font-weight: 900;
    line-height: 25px;
    text-transform: uppercase;
  }

  .desc {
    color: $secondary-color;
    font-size: 17px;
    font-weight: 200;
  }
}

.svg-picture {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.tache {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: red;
    border-radius: 50%;
  }

  &::before {
    top: 0;
    left: 25%;
    transform: rotate(45deg);
  }

  &::after {
    bottom: 0;
    right: 25%;
    transform: rotate(-45deg);
  }
}

.button-app {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px;
  .btn-start {
    color: $secondary-color;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
  }
  .btn-login {
    color: $thirdary-color;
    text-transform: lowercase;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
