<template>
  <v-dialog
    v-model="isManagementAddFoodInMealModal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeModal()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>Ajouter un aliment</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <DefaultTitle title="Nom dynamique" />
        <ListMealCard :addable="true" />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import ListMealCard from "@/components/listFood/listFoodCard.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddFoodMealModal",

  components: {
    DefaultTitle,
    ListMealCard,
  },
  data() {
    return {
      dialogVisible: false,
      textFieldDate: "",
      grams: "",
      formData: [],
      currentFoodSelect: [],
    };
  },
  computed: {
    ...mapGetters(["isManagementAddFoodInMealModal"]),
  },
  methods: {
    ...mapActions(["managementAddFoodInMealModal"]),

    closeModal() {
      this.managementAddFoodInMealModal(false);
      this.formData = [];
    },
    validModal() {
      this.closeModal();
    },
  },
};
</script>

<style lang="scss">
.food-card {
  background-color: #f6f6f6 !important;
  border-radius: 8px !important;
}
</style>
