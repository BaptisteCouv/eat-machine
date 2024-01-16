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
                  <v-col cols="9">
                    <div>{{ i.foodDetails.name }}</div>
                  </v-col>
                  <v-col cols="3">
                    <div class="price text-right">
                      {{ i.foodDetails.price }} €
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5" offset="7" class="pt-0">
                    <v-text-field
                      v-model="i.quantity"
                      label="Quantité"
                      :suffix="isUnit(i.foodDetails.unitMeasurement)"
                      type="number"
                      @blur="changeValueData(i)"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row class="meal-detail-card--body">
                  <v-col
                    cols="3"
                    class="d-flex align-center flex-column"
                    v-for="y in i.foodDetails.detail"
                    :key="y"
                  >
                    <div class="meal-detail-card-body--title">{{ y.name }}</div>
                    <div class="meal-detail-card-body--total">
                      {{ y.quantity }}
                    </div>
                    <div class="meal-detail-card-body-total--unit">
                      {{ y.unit }}
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
import AddFoodMealModal from "@/components/listMeal/AddFoodMealModal.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListFoodInMealModal",

  components: {
    DefaultTitle,
    AddFoodMealModal,
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
    ...mapGetters([
      "isManagementFoodInMealModal",
      "getListFoodsByMeals",
      "isManagementAddFoodInMealModal",
      "isAddIdCurrentMealOpenend"
    ]),
  },
  watch: {
    getListFoodsByMeals(data) {
      if (data) {
        data.forEach((element: any) => {
          element.foodDetails.detail.forEach((i: any) => {
            let a = (element.quantity / 100) * i.quantity;
            i.quantity = parseFloat(a.toFixed(1));
          });
        });
      }
    },
    isManagementAddFoodInMealModal() {
      if (!this.isManagementAddFoodInMealModal) {
        this.getAllFoodsByMeals(this.isAddIdCurrentMealOpenend);
      }
    },
  },
  methods: {
    ...mapActions([
      "managementFoodInMealModal",
      "getOneFoodsNutritionalsByFoodBinds",
      "managementAddFoodInMealModal",
      "getAllFoodsByMeals",
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
    async getOneFood(id: string) {
      await this.getOneFoodsNutritionalsByFoodBinds([id]).then((response) => {
        this.currentFoodSelect = response;
      });
    },
    async changeValueData(data: any) {
      await this.getOneFood(data.idFood);
      delete data.foodDetails.detail;

      data.foodDetails.detail = this.currentFoodSelect;

      data.foodDetails.detail.forEach((detailElement: any) => {
        let a = (data.quantity / 100) * detailElement.quantity;
        detailElement.quantity = parseFloat(a.toFixed(1));
      });
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
