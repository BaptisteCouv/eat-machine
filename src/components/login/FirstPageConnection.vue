<template>
  <!-- <v-img class="test" aspect-ratio="4/3" src="../../assets/Humaaans - Space.png"></v-img> -->
  <div class="picture-home pt-4">
    <img class="picture" src="../../assets/Humaaans - Space.png" />
  </div>
  <div class="title-app mt-5">
    <div class="title">Eat machine</div>
    <div class="desc">manger mieux c'est mieux</div>
  </div>
  <!-- <div class="svg-picture">
    <v-img aspect-ratio="4/3" src="../../assets/Vector-1.svg"></v-img>
  </div> -->
  <div class="button-app">
    <v-btn
      class="btn-secondary mb-6"
      rounded="xl"
      size="x-large"
      block
      append-icon="mdi-arrow-right-thick"
    >
      Commencer
    </v-btn>
    <div class="desc-btn">Vous avez déjà un compte ?</div>
    <v-btn
      class="btn-secondary mt-1"
      variant="text"
      rounded="xl"
      size="small"
      block
      @click="temp()"
    >
      Connexion
    </v-btn>
  </div>
</template>

<script lang="ts">
import router from "@/router";

export default {
  name: "FirstPageConnection",
  methods: {
    temp() {
      router.push({ path: "login" });
    },
  },
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

.picture-home {
  text-align: center;
  .picture {
    width: calc(100% - 114px);
  }
}

.svg-picture {
  position: absolute;
  width: 100%;
  bottom: 0;
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
}

.desc-btn {
  color: $secondary-color;
  font-size: 12px;
  text-align: center;
}
</style>
