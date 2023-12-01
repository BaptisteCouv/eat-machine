<template>
  <v-bottom-navigation>
    <v-btn value="favorites" @click="gotToHome()">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
export default {
  name: "BottomNavigation",

  data() {
    return {};
  },
  methods: {
    gotToHome() {
        this.$router.push('/')
    }
  }
};
</script>
