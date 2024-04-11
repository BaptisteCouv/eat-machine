<template>
  <v-container class="container">
    <v-row class="px-2">
      <v-col cols="12">
        <div class="title">Bienvenue</div>
      </v-col>
      <v-col cols="12">
        <div class="desc">Connectez-vous pour accéder à votre compte</div>
      </v-col>
      <v-col cols="12">
        <v-text-field label="E-mail" variant="outlined"></v-text-field>
        <v-text-field label="Mot de passe" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="12" class="px-16">
        <v-btn
          class="btn-connection"
          rounded="xl"
          block
          append-icon="mdi-arrow-right-thick"
        >
          Commencer
        </v-btn>
        <v-btn class="btn-signin mt-2" variant="text" rounded="xl" block>
          Connexion
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.container {
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.title {
  font-size: 20;
  font-weight: 900;
  color: $secondary-color;
  text-transform: uppercase;
  text-align: center;
}
.desc {
  font-size: 14;
  font-weight: 300;
  color: $secondary-color;
  text-align: center;
  letter-spacing: 3px;
}

.btn-connection {
  color: $secondary-color;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.btn-signin {
  color: white;
  text-transform: none;
  font-size: 18px;
  font-weight: 300;
}
</style>
