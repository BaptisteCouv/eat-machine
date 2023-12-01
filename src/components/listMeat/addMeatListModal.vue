<template>
  <v-dialog
    v-model="isManagementListMeatModal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeListMeatModal()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>Dans le cul</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <DefaultTitle title="Ajouter un aliment" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-text-field
              v-model="formData.name"
              label="Nom de l'aliment"
            ></v-text-field>
            <v-switch
              v-model="formData.isUnit"
              label="Aliment à l'unité ?"
              color="primary"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <p class="text">
              Veuillez saisir les valeurs nutritionnelles pour une portion de
              <b>100g</b>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="pt-0">
            <v-text-field
              v-model="formData.calorie"
              prepend-inner-icon="mdi-fire"
              color="red"
              label="Calories"
              suffix="kcal"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="pt-0">
            <v-text-field
              v-model="formData.proteine"
              prepend-inner-icon="mdi-food-drumstick-outline"
              color="blue"
              label="Protéines"
              suffix="g"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="pt-0">
            <v-text-field
              v-model="formData.glucide"
              prepend-inner-icon="mdi-barley"
              color="green"
              label="Glucides"
              suffix="g"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="pt-0">
            <v-text-field
              v-model="formData.lipide"
              prepend-inner-icon="mdi-lightning-bolt-outline"
              color="orange"
              label="Lipides"
              suffix="g"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-text-field
              v-model="formData.price"
              label="Prix au kilo"
              suffix="€"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0 d-flex justify-end">
            <v-btn
              variant="flat"
              class="btn-cancel px-6 mr-3"
              rounded="xl"
              @click="closeListMeatModal()"
            >
              Annuler
            </v-btn>
            <v-btn
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="addMeatToList()"
            >
              Ajouter
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import DefaultTitle from "@/components/default/DefaultTitle.vue";

export default {
  name: "addMeatListModal",

  components: {
    DefaultTitle,
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      formData: {
        isUnit: false,
        name: "",
        calorie: "",
        proteine: "",
        glucide: "",
        lipide: "",
        price: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isManagementListMeatModal"]),
  },
  methods: {
    ...mapActions(["managementListMeatModal"]),
    closeListMeatModal() {
      this.managementListMeatModal(false);
      this.formData = {
        isUnit: false,
        name: "",
        calorie: "",
        proteine: "",
        glucide: "",
        lipide: "",
        price: "",
      };
    },
    addMeatToList() {
      this.closeListMeatModal();
    },
  },
};
</script>

<style lang="scss">
.text {
  color: #b9b9b9;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
}

.btn-add {
  color: white !important;
}
.btn-cancel {
  color: #A7A7A7 !important;
}
</style>
