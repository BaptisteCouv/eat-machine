<template>
  <v-dialog
    v-model="isManagementFoodInMealModal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeModal()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>add meal</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <DefaultTitle title="Nom dynamique" />
        <v-row>
          <v-col cols="12" class="pt-0 d-flex justify-end">
            <v-btn
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="addFood()"
            >
              Ajouter
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            class="pb-0"
            v-for="i in getListFoodsByMeals"
            :key="i"
          >
            <v-sheet class="food-card">
              <v-container>
                <v-row>
                  <v-col cols="12" class="pb-0">
                    <v-text-field
                      v-model="i.foodDetails[0].name"
                      label="Sélectionner un aliment"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" class="pt-0">
                    <v-switch
                      v-model="i.foodDetails[0].unitMeasurement"
                      label="A l'unité ?"
                      color="primary"
                    ></v-switch>
                  </v-col>
                  <v-col cols="4" class="pt-0">
                    <v-text-field
                      v-model="i.quantity"
                      label="Quantité"
                      :suffix="isUnit(i.foodDetails[0].unitMeasurement)"
                      type="number"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="meal-detail-card--body">
                  <v-col
                    cols="3"
                    class="d-flex align-center flex-column"
                  >
                    <div class="meal-detail-card-body--title">Calories</div>
                    <div class="meal-detail-card-body--total">
                      {{ i.foodDetails[0].calories }}
                    </div>
                    <div class="meal-detail-card-body-total--unit">
                      kcal
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                    class="d-flex align-center flex-column"
                  >
                    <div class="meal-detail-card-body--title">Protéines</div>
                    <div class="meal-detail-card-body--total">
                      {{ 
                        i.foodDetails[0].protein }}
                    </div>
                    <div class="meal-detail-card-body-total--unit">
                      g
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                    class="d-flex align-center flex-column"
                  >
                    <div class="meal-detail-card-body--title">Glucides</div>
                    <div class="meal-detail-card-body--total">
                      {{ i.foodDetails[0].carbohydrates }}
                    </div>
                    <div class="meal-detail-card-body-total--unit">
                      g
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                    class="d-flex align-center flex-column"
                  >
                    <div class="meal-detail-card-body--title">Lipides</div>
                    <div class="meal-detail-card-body--total">
                      {{ i.foodDetails[0].lipid }}
                    </div>
                    <div class="meal-detail-card-body-total--unit">
                      g
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "addFoodInMealModal",

  components: {
    DefaultTitle,
  },
  data() {
    return {
      dialogVisible: false,
      textFieldDate: "",
      grams: "",
      formData: [],
    };
  },
  computed: {
    ...mapGetters([
      "isManagementFoodInMealModal",
      "getListFoodsByMeals",
      "getoneFoodByFoodBLind",
    ]),
  },
  methods: {
    ...mapActions([
      "managementFoodInMealModal",
      "getOneFoodsNutritionalsByFoodBinds",
    ]),
    closeModal() {
      this.managementFoodInMealModal(false);
      this.formData = [];
    },
    validModal() {
      this.closeModal();
    },
    isUnit(unit: boolean) {
      if (unit) {
        return "u";
      } else {
        return "g";
      }
    },
    getAllFood(id: string) {
      this.getOneFoodsNutritionalsByFoodBinds([id]);
    },
    addFood() {
      const myFood = {
        name: "",
        quantity: "",
        unit: false,
        detail: [
          {
            icon: "mdi-fire",
            name: "Calories",
            quantity: 619,
            unit: "kcal",
            color: "red",
          },
          {
            icon: "mdi-food-drumstick-outline",
            name: "Protéines",
            quantity: 24,
            unit: "g",
            color: "blue",
          },
          {
            icon: "mdi-barley",
            name: "Glucides",
            quantity: 5.7,
            unit: "g",
            color: "green",
          },
          {
            icon: "mdi-lightning-bolt-outline",
            name: "Lipides",
            quantity: 54,
            unit: "g",
            color: "orange",
          },
        ],
      };
      this.formData.push(myFood);
    },
  },
};
</script>

<style lang="scss">
.food-card {
  background-color: #f6f6f6 !important;
  border-radius: 8px !important;
}

.meal-detail-card--body {
  .meal-detail-card-body--title {
    color: #333146;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 200;
  }
  .meal-detail-card-body--total {
    color: #36485e;
    font-size: 25px;
    font-weight: 700;
    line-height: 25px;
  }
  .meal-detail-card-body-total--unit {
    color: #36485e;
    font-size: 10px;
    font-weight: 300;
    line-height: 7px;
  }
}
</style>
