<template>
  <v-bottom-navigation>
    <v-btn value="favorites" @click="gotToHome()">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>
    <v-btn value="favorites" @click="logout()">
      <v-icon>mdi-logout</v-icon>

      <span>Deconnexion</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import AuthService from "@/auth/authUtils";

export default {
  name: "BottomNavigation",

  data() {
    return {};
  },
  methods: {
    gotToHome() {
      this.$router.push("/");
    },
    logout() {
      AuthService.logout();
    },
  },
};
</script>
