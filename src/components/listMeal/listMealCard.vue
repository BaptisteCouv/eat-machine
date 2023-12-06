<template>
  <MealCard :getListAllCategory="getListAllCategory" :getListAllMeals="getListAllMeals" />
</template>

<script lang="ts">
import MealCard from "@/components/listMeal/MealCard.vue";

export default {
  name: "listMealCard",
  components: {
    MealCard
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
};
</script>

<style lang="scss" scoped></style>
