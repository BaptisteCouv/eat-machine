<template>
  <v-container class="meal-detail--card mb-2 pa-3" v-if="nutritionalsData">
    <v-row class="meal-detail header">
      <v-col cols="8" class="pa-0">
        <div class="meal-detail--title px-2 pt-2">
          {{ nutritionalsData.name }}
        </div>
      </v-col>
      <v-col cols="4" class="pa-0">
        <div class="px-2 pt-2 d-flex justify-end">
          <v-btn
            size="x-small"
            variant="outlined"
            icon="mdi-plus-box-multiple"
            color="white"
            @click="addMeal(nutritionalsData._id)"
          ></v-btn>
          <v-btn
            class="ml-1"
            size="x-small"
            icon="mdi-pencil"
            variant="outlined"
            color="white"
          ></v-btn>
          <v-btn
            class="ml-1"
            size="x-small"
            icon="mdi-trash-can-outline"
            color="red"
            @click="deleteData(nutritionalsData._id)"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="d-flex justify-center align-center">
        <div class="detail-card quantite">
          <div class="title">Quantité</div>
          <input
            v-if="editMode"
            v-model="totalQuantity"
            type="text"
            class="custom-input"
            @blur="changeQuantite(totalQuantity, nutritionalsData._id)"
          />
          <div v-else class="number">{{ currentQuantity }}</div>
          <div class="unit" v-if="nutritionalsData.unitMeasurement">u</div>
          <div class="unit" v-else>g</div>
        </div>
      </v-col>
      <v-col cols="4" class="d-flex justify-center align-center">
        <div class="detail-card calorie">
          <div class="title">Calories</div>
          <div class="number">{{ nutritionalsData.calories }}</div>
          <div class="unit">kcal</div>
        </div>
      </v-col>
      <v-col cols="4" class="d-flex justify-center align-center">
        <div class="detail-card price">
          <div class="title">Prix</div>
          <div class="number">{{ nutritionalsData.price }}</div>
          <div class="unit">€</div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="3" class="d-flex justify-center align-center">
        <div class="detail-card nutritional">
          <div class="title">Glucides</div>
          <div class="number">{{ nutritionalsData.carbohydrates }}</div>
          <div class="unit">g</div>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-center align-center">
        <div class="detail-card nutritional">
          <div class="title">Protéines</div>
          <div class="number">{{ nutritionalsData.protein }}</div>
          <div class="unit">g</div>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-center align-center">
        <div class="detail-card nutritional">
          <div class="title">Lipides</div>
          <div class="number">{{ nutritionalsData.lipid }}</div>
          <div class="unit">g</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { createOnFoodByMeal } from "@/services/foodsBinds.services";
import { mapGetters, mapActions } from "vuex";
import { IFoodsNutritionals } from "@/models/foodsNutritionals.models";

export default {
  name: "MealDetailCard",

  data() {
    return {
      snackbar: false,
      totalQuantity: this.currentQuantity,
    };
  },

  props: {
    nutritionalsData: {
      type: Object as () => IFoodsNutritionals,
      required: true,
    },
    currentQuantity: {
      type: Number,
    },
    currentIdBind: {
      type: String,
    },
    editMode: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(["isAddIdCurrentMealOpenend"]),
  },
  methods: {
    ...mapActions(["managementAddFoodInMealModal"]),
    addMeal(mealDetail: any) {
      const params = {
        idMeals: this.isAddIdCurrentMealOpenend,
        idFood: mealDetail,
        quantity: 100,
      };
      createOnFoodByMeal(params);
      this.managementAddFoodInMealModal(false);
    },
    deleteData(id: string) {
      this.snackbar = true;

      this.$emit("deleteData", id, this.currentIdBind);
    },
    changeQuantite(quantite: any, idFood: string) {
      this.$emit("changeQuantite", this.currentIdBind, quantite, idFood);
    },
  },
};
</script>
<style lang="scss" scoped>
.meal-detail--title {
  color: white;
  font-size: 21px;
  font-weight: 300;
}
.meal-detail--card {
  background-color: white;
  border-radius: 15px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  .detail-card {
    text-align: center;
    line-height: 17px;
    color: #36485e;
    font-size: 14px;
    .title {
      text-transform: uppercase;
    }
    .number {
      font-weight: 800;
      font-size: 23px;
    }
    &.calorie {
      line-height: 24px;
      .number {
        font-weight: 900;
        font-size: 35px;
      }
    }
    &.nutritional {
      .number {
        color: #4d8f55;
      }
    }
  }
}
.meal-detail.header {
  background-color: #4d8f55;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 45px;
}

.custom-input {
  width: 80px;
  height: 30px;
  background-color: #e7e7e7;
  color: #36485e;
  font-size: 23px;
  font-weight: 800;
  text-align: center;
  border-radius: 5px;
}
</style>
