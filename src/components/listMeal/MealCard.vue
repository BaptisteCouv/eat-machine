<template>
  <ListFoodInMealModal />

  <v-container>
    <v-row>
      <v-col
        cols="12"
        v-for="(category, i) in getListAllCategory"
        :key="i"
        class="list-categorie"
      >
        <div class="mb-2">
          <div
            class="meal-card--name mx-0 d-flex justify-space-between align-end"
          >
            <div class="name">{{ category.name }}</div>
            <div class="d-flex">
              <v-chip class="meal-card--time mr-2">
                {{ category.mealTime }}
              </v-chip>
              <v-btn icon="mdi-pencil" size="x-small" variant="tonal"></v-btn>
            </div>
          </div>
        </div>
        <v-sheet class="meal-card--body pb-6 pt-6">
          <v-row v-for="(meal, ii) in getListAllMeals" :key="ii">
            <template v-for="idCategory in meal.idCategory" :key="idCategory">
              <v-col cols="12" class="py-1" v-if="idCategory === category._id">
                <div
                  class="card mx-4 pa-3"
                  @click="openModalWithParam(true, meal._id)"
                >
                  <div class="card-name">{{ meal.name }}</div>
                </div>
              </v-col>
            </template>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ListFoodInMealModal from "@/components/listMeal/ListFoodInMealModal.vue";

import { mapActions } from "vuex";

export default {
  name: "MealCard",
  components: {
    ListFoodInMealModal,
  },
  props: {
    getListAllCategory: {
      type: Array,
      required: true,
    },
    getListAllMeals: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "managementFoodInMealModal",
      "getAllFoodsByMeals",
      "addIdCurrentMealOpenend",
    ]),

    openModalWithParam(isOpen: boolean, idMeal: string) {
      this.getAllFoodsByMeals(idMeal);
      this.managementFoodInMealModal(isOpen);
      this.addIdCurrentMealOpenend(idMeal);
    },
  },
};
</script>

<style lang="scss" scoped>
.meal-card {
  &--time {
    color: #333146;
  }
  &--name {
    color: #56dd65;
    font-size: 20px;
    font-weight: 300;
    text-overflow: ellipsis;
    text-transform: uppercase;
    .name {
      display: -webkit-box;
      max-width: 400px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &--body {
    background-color: #f6f6f6 !important;
    border-radius: 8px !important;
    .card {
      background-color: #fff;
      border-radius: 8px;
      .card-name {
        color: #29252c;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
}
</style>
