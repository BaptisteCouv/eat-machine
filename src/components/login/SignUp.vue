<template>
  <v-container class="container">
    <v-row class="px-2">
      <v-col cols="12">
        <div class="title">Bienvenue</div>
      </v-col>
      <v-col cols="12">
        <div class="desc">Démarrez votre parcours : Inscrivez-vous ici !</div>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="firstName"
          :rules="[rules.required]"
          label="Nom"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="[rules.required]"
          class="mt-3"
          label="Prénom"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.required]"
          class="mt-3"
          label="E-mail"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          class="mt-3"
          variant="outlined"
          hint="Au minimum 8 caractères"
          label="Mot de passe"
          name="input-10-1"
          counter
          @click:append-inner="show1 = !show1"
        ></v-text-field>
        <div class="message-event">{{ messageEvent }}</div>
      </v-col>
      <v-col cols="12" class="px-16">
        <v-btn
          class="btn-secondary reverse mb-6"
          rounded="xl"
          block
          append-icon="mdi-arrow-right-thick"
          @click="signUp()"
        >
          inscription
        </v-btn>
        <div class="desc-btn">Vous n'avez pas encore de compte ?</div>
        <v-btn
          class="btn-signup mt-1"
          variant="text"
          rounded="xl"
          block
          @click="goToConnection()"
        >
          Connexion
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import router from "@/router";

import { mapActions } from "vuex";

export default {
  name: "SignUp",

  data() {
    return {
      show1: false,
      show2: true,
      password: "",
      lastName: "",
      firstName: "",
      email: "",
      messageEvent: "",
      rules: {
        required: (value: any) => !!value || "Required.",
        min: (v: any) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },

  methods: {
    ...mapActions(["signUpConnexion", "loginConnexion"]),

    goToSignUp() {
      router.push({ path: "signup" });
    },
    goToConnection() {
      router.push({ path: "login" });
    },
    async signUp() {
      await this.signUpConnexion({
        password: this.password,
        email: this.email,
        lastName: this.lastName,
        firstName: this.firstName,
      }).then((res) => {
        this.messageEvent = res;
      });
      await this.loginConnexion({ email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}
.title {
  font-size: 20px;
  font-weight: 900;
  color: $secondary-color;
  text-transform: uppercase;
  text-align: center;
}
.desc {
  font-size: 14px;
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
.btn-signup {
  color: $secondary-color;
  text-transform: none;
  font-size: 18px;
  font-weight: 400;
}
.desc-btn {
  color: $secondary-color;
  font-size: 12px;
  text-align: center;
}
.message-event {
  color: red;
  text-align: center;
}
</style>
