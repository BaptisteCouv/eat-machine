<template>
  <div class="text-uppercase d-flex flex-column text-h4 bg-primary pa-3">
    <span class="d-flex justify-center text-h1 font-weight-bold text-white">
      {{ numberDay }}
    </span>
    <span class="d-flex justify-center font-weight-thin text-white ml-2">
      {{ nameMouth }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppBar",

  data() {
    return {
      numberDay: 0,
      nameMouth: "",
      moisEnLettres: [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre",
      ],
    };
  },
  mounted() {
    this.doSomething();
  },
  methods: {
    doSomething(): void {
      const dateDuJour = new Date();
      this.numberDay = dateDuJour.getDate();
      this.nameMouth = this.moisEnLettres[dateDuJour.getMonth()];
    },
  },
};
</script>
