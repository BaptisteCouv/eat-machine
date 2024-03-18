<template>
  <MealCard
    :getListAllCategory="getListAllCategory"
    :getListAllMeals="getListAllMeals"
    :isEditing="isEditing"
    @openMealModal="openMealModal"
  />
</template>

<script lang="ts">
import MealCard from "@/components/listMeal/MealCard.vue";

export default {
  name: "listMealCard",
  components: {
    MealCard,
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
    isEditing: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    openMealModal(params: object) {
      this.$emit("openMealModal", params)
    }
  }
};
</script>

<style lang="scss" scoped></style>
