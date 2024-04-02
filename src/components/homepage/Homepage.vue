<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <DefaultTitle title="Gestion" />
        <v-row>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-format-list-bulleted"
              width="100%"
              rounded="lg"
              color="primary"
              @click="goToListFood()"
            >
              Mes aliments
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-food-outline"
              width="100%"
              rounded="lg"
              color="primary"
              @click="goToListMeal()"
            >
              Mes repas
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <template v-for="(category, i) in getAllCategoryOrderByHour" :key="i">
      <v-row v-if="category.isActive">
        <v-col cols="12">
          <DefaultTitle :title="category.name" />
          <template v-for="(meal, ii) in category.meals" :key="ii">
            <MealCard :meal="meal" />
          </template>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import MealCard from "@/components/infoCard/MealCard.vue";
import DefaultTitle from "@/components/default/DefaultTitle.vue";

import { ICategory } from "@/models/category.models";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Homepage",
  components: {
    MealCard,
    DefaultTitle,
  },
  data() {
    return {
      getAllCategoryOrderByHour: [] as ICategory[],
    }; 
  },
  created() {
    this.getCategory();
  },
  computed: {
    ...mapGetters(["getListAllCategory", "getListAllMeals"]),
  },
  methods: {
    ...mapActions(["getAllCategory", "getAllMeals"]),
    async getCategory() {
      await this.getAllCategory().then(() => {
        this.getAllMeals().then(() => {
          this.trierLesHeures(this.getListAllCategory);
        });
      });
    },
    trierLesHeures(categorys: any) {
      const categorizedMeals = categorys.map((category: any) => {
        const relatedMeals = this.getListAllMeals.filter((meal: any) =>
          meal.idCategory.includes(category._id)
        );
        const isActive = relatedMeals.some((meal: any) => meal.isActive); // Check if any meal is active
        return { ...category, meals: relatedMeals, isActive };
      });
      let categoryBis = categorizedMeals;
      categoryBis.sort((a: any, b: any) => {
        return parseInt(a.mealTime) - parseInt(b.mealTime);
      });
      this.getAllCategoryOrderByHour = categoryBis;
    },
    goToListFood() {
      this.$router.push("/listFood");
    },
    goToListMeal() {
      this.$router.push("/listMeal");
    },
  },
};
</script>
<style lang="scss">
.gestion-btn {
  height: 48px !important;
  color: #36485e !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: normal !important;
  text-transform: capitalize !important;
}
</style>
