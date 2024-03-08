<template>
  <AddFoodMealModal />

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
        <v-row v-if="tempData">
          <v-col>
            <div v-for="food in tempData" :key="food">
              <MealDetailCard
                :nutritionalsData="food.foodBindValue"
                :currentQuantity="food.quantity"
                :currentIdBind="food.idFoodBind"
                :edit-mode="true"
                @change-quantite="changeValueData"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import AddFoodMealModal from "@/components/listMeal/AddFoodMealModal.vue";
import MealDetailCard from "@/components/infoCard/MealDetailCard.vue";

import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "ListFoodInMealModal",

  components: {
    DefaultTitle,
    AddFoodMealModal,
    MealDetailCard,
  },
  data() {
    return {
      textFieldDate: "",
      formData: [],
      currentFoodSelect: [],
      tempData: [],
      originalTempData: [],
    };
  },
  computed: {
    ...mapGetters([
      "isManagementFoodInMealModal",
      "getListFoodsByMeals",
      "isManagementAddFoodInMealModal",
      "isAddIdCurrentMealOpenend",
      "changeFoodsByMeals",
    ]),
    ...mapState({
      listFood: (state: any) => state.listFoodsByMeals,
      idCurrentMealOpenend: (state: any) => state.idCurrentMealOpenend,
    }),
  },
  watch: {
    isManagementAddFoodInMealModal() {
      if (!this.isManagementAddFoodInMealModal) {
        this.getAllFoodsByMeals(this.isAddIdCurrentMealOpenend);
      }
    },
    isManagementFoodInMealModal() {
      this.getAllFoodsByMeals(this.isAddIdCurrentMealOpenend).then(() => {
        this.tempData = this.listFood;
        this.originalTempData = JSON.parse(JSON.stringify(this.listFood));
        this.convertPrice();
      });
    },
  },
  methods: {
    ...mapActions([
      "managementFoodInMealModal",
      "getOneFoodsNutritionalsByFoodBinds",
      "managementAddFoodInMealModal",
      "getAllFoodsByMeals",
      "modifyFoodsByMeals",
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

    async changeValueData(id: string, quantity: number, idFood: string) {
      this.modifyFoodsByMeals({
        idFoodMeal: id,
        quantity: quantity,
      });
      this.convertOnePrice(id, quantity, idFood);
    },

    convertOnePrice(idMeal: string, quantiteChange: number, idFood: string) {
      const GRAM_TO_KG = 1000;
      const GRAM_TO_PERCENTAGE = 100;
      let allPass = true;
      if (idMeal && quantiteChange && idFood) {
        allPass = false;
      }

      for (let index = 0; index < this.tempData.length; index++) {
        let quantity;

        if (quantiteChange) {
          quantity = quantiteChange;
        } else {
          quantity = this.tempData[index].quantity;
        }

        if (
          (this.tempData[index].foodBindValue._id === idFood &&
            this.tempData[index].idFoodBind === idMeal) ||
          allPass
        ) {
          this.tempData[index].foodBindValue = JSON.parse(
            JSON.stringify(this.originalTempData[index].foodBindValue)
          );

          const calculateNutritionalValues = (value) =>
            parseFloat(((quantity / GRAM_TO_PERCENTAGE) * value).toFixed(1));

          this.tempData[index].foodBindValue.calories =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.calories
            );
          this.tempData[index].foodBindValue.protein =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.protein
            );
          this.tempData[index].foodBindValue.lipid = calculateNutritionalValues(
            this.tempData[index].foodBindValue.lipid
          );
          this.tempData[index].foodBindValue.carbohydrates =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.carbohydrates
            );

          const price =
            (this.tempData[index].foodBindValue.price * quantity) / GRAM_TO_KG;
          this.tempData[index].foodBindValue.price = parseFloat(
            price.toFixed(1)
          );
        }
      }
    },

    convertPrice(quantiteChange) {
      const GRAM_TO_KG = 1000;
      const GRAM_TO_PERCENTAGE = 100;

      if (this.tempData) {
        for (let index = 0; index < this.tempData.length; index++) {
          // Copie profonde de foodBindValue
          this.tempData[index].foodBindValue = JSON.parse(
            JSON.stringify(this.originalTempData[index].foodBindValue)
          );

          let quantity;
          if (quantiteChange) {
            quantity = quantiteChange;
          } else {
            quantity = this.tempData[index].quantity;
          }

          // Fonction pour calculer les valeurs nutritionnelles
          const calculateNutritionalValues = (value) =>
            parseFloat(((quantity / GRAM_TO_PERCENTAGE) * value).toFixed(1));

          this.tempData[index].foodBindValue.calories =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.calories
            );
          this.tempData[index].foodBindValue.protein =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.protein
            );
          this.tempData[index].foodBindValue.lipid = calculateNutritionalValues(
            this.tempData[index].foodBindValue.lipid
          );
          this.tempData[index].foodBindValue.carbohydrates =
            calculateNutritionalValues(
              this.tempData[index].foodBindValue.carbohydrates
            );

          // Calcul du prix
          const price =
            (this.tempData[index].foodBindValue.price * quantity) / GRAM_TO_KG;
          this.tempData[index].foodBindValue.price = parseFloat(
            price.toFixed(1)
          );
        }
      }
    },

    addFood() {
      this.managementAddFoodInMealModal(true);
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

.price {
  color: #36485e;
  font-size: 15px;
  font-weight: 600;
}
</style>
