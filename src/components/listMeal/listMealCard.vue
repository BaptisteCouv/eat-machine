<template>
  <MealCard
    :getListAllCategory="getListAllCategory"
    :getListAllMeals="getListAllMeals"
    :isEditing="isEditing"
    :isDeleting="isDeleting"
    @openMealModal="openMealModal"
  />
</template>

<script lang="ts">
import MealCard from "@/components/listMeal/MealCard.vue";
import { ICategory } from "@/models/category.models";
import { IMeals } from "@/models/meals.models";

export default {
  name: "listMealCard",
  components: {
    MealCard,
  },
  props: {
    getListAllCategory: {
      type: Array as () => ICategory[],
      required: true,
    },
    getListAllMeals: {
      type: Array as () => IMeals[],
      required: true,
    },
    isEditing: {
      type: Boolean,
      required: true,
    },
    isDeleting: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    openMealModal(params: object) {
      this.$emit("openMealModal", params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
