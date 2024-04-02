<template>
  <v-sheet class="meal-card">
    <div class="meal-card--body pt-2 mb-2">
      <div class="title-meal">{{ meal.name }}</div>
      <v-container>
        <v-row class="meal-card-body--info">
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-food-drumstick-outline</v-icon>
            </div>
            <div class="meal-card-body--title">Protéines</div>
            <div class="meal-card-body--total">
              {{ totalAllData.foodBindValue.protein }}
            </div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-barley</v-icon>
            </div>
            <div class="meal-card-body--title">Glucides</div>
            <div class="meal-card-body--total">
              {{ totalAllData.foodBindValue.carbohydrates }}
            </div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-lightning-bolt-outline</v-icon>
            </div>
            <div class="meal-card-body--title">Lipides</div>
            <div class="meal-card-body--total">
              {{ totalAllData.foodBindValue.lipid }}
            </div>
          </v-col>
        </v-row>
        <v-row class="meal-card-body--recap">
          <v-col cols="12" class="d-flex justify-center">
            <div
              class="meal-card-body--circle d-flex align-center justify-center flex-column"
            >
              <div class="meal-card-body--icon"><v-icon>mdi-fire</v-icon></div>
              <div class="meal-card-body--total">
                {{ totalAllData.foodBindValue.calories }}
              </div>
              <div class="meal-card-body--title">Calories</div>
            </div>
          </v-col>
        </v-row>
        <v-row class="meal-card-body--detail">
          <v-col
            cols="12"
            class="d-flex justify-center"
            @click="displayDetail()"
          >
            Détails
            <v-icon v-if="isOpen">mdi-chevron-up</v-icon>
            <v-icon v-else>mdi-chevron-down</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-expand-transition>
      <div v-if="isOpen">
        <template v-for="mealChild in foodByMeal" :key="mealChild">
          <MealDetailCard
            :nutritionalsData="mealChild.foodBindValue"
            :currentQuantity="mealChild.quantity"
            :reduced-view="true"
          />
        </template>
      </div>
    </v-expand-transition>
  </v-sheet>
</template>

<script lang="ts">
import MealDetailCard from "@/components/infoCard/MealDetailCard.vue";

import { ICategory } from "@/models/category.models";
import { IFoodsByMeal } from "@/models/foodsByMeal.models";

import { mapActions, mapState } from "vuex";

export default {
  name: "MealCard",
  components: { MealDetailCard },
  data() {
    return {
      isOpen: false,
      totalAllData: {
        quantity: 0,
        foodBindValue: {
          name: "Total",
          unitMeasurement: false,
          calories: 0,
          protein: 0,
          lipid: 0,
          carbohydrates: 0,
          price: 0,
        },
      },
      foodByMeal: [] as IFoodsByMeal[],
    };
  },
  created() {
    this.getListFoodOfMeal();
  },
  computed: {
    ...mapState({
      listFood: (state: any) => state.listFoodsByMeals,
    }),
  },
  props: {
    meal: {
      type: Object as () => ICategory,
      required: true,
    },
  },
  methods: {
    ...mapActions(["getAllFoodsByMeals"]),
    displayDetail() {
      this.isOpen = !this.isOpen;
    },
    async getListFoodOfMeal() {
      await this.getAllFoodsByMeals(this.meal._id).then(() => {
        this.foodByMeal = this.listFood;

        let total = {
          quantity: 0,
          foodBindValue: {
            name: "Total",
            unitMeasurement: false,
            calories: 0,
            protein: 0,
            lipid: 0,
            carbohydrates: 0,
            price: 0,
          },
        };

        this.listFood.forEach((element: any) => {
          total.quantity += element.quantity;
          total.foodBindValue.calories += element.foodBindValue.calories;
          total.foodBindValue.protein += element.foodBindValue.protein;
          total.foodBindValue.lipid += element.foodBindValue.lipid;
          total.foodBindValue.carbohydrates +=
            element.foodBindValue.carbohydrates;
          total.foodBindValue.price += element.foodBindValue.price;
        });

        this.totalAllData = total;
      });
    },
  },
};
</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.meal-card {
  .meal-card--body {
    background-color: #f6f6f6;
    border-radius: 8px;
    .meal-card-body--info {
      .meal-card-body--icon {
        color: #4d8f55;
      }
      .meal-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 200;
      }
      .meal-card-body--total {
        color: #36485e;
        font-size: 36px;
        font-weight: 700;
        line-height: 36px;
      }
    }
    .meal-card-body--recap {
      .meal-card-body--circle {
        width: 170px;
        height: 170px;
        border: 7px solid #333146;
        border-radius: 50%;
      }
      .meal-card-body--icon {
        color: #4d8f55;
        font-size: 36px;
      }
      .meal-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 300;
      }
      .meal-card-body--total {
        color: #333146;
        font-size: 42px;
        font-weight: 900;
        line-height: 36px;
      }
    }
    .meal-card-body--detail {
      color: #333146;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 200;
      line-height: normal;
    }
  }
}
.title-meal {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #4d8f55;
}
</style>
