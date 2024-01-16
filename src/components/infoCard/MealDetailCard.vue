<template>
  <v-container class="meal-detail--card pb-0" v-for="i in allFoods" :key="i">
    <v-row class="meal-detail-card--price">
      <v-col cols="12" class="pr-0 pb-0">
        <div class="d-flex justify-end">
          <v-chip color="primary" variant="flat"> {{ i.price }} € </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row class="meal-detail-card--header">
      <v-col cols="12" class="d-flex align-center flex-column pt-0">
        <div v-if="i.icon" class="meal-detail-card-header--icon">
          <v-icon>{{ i.icon }}</v-icon>
        </div>
        <div class="meal-detail-card-header--title">{{ i.name }}</div>
      </v-col>
    </v-row>
    <v-row class="meal-detail-card--body">
      <v-col
        cols="3"
        class="d-flex align-center flex-column"
        v-for="y in i.detail"
        :key="y"
      >
        <div class="meal-detail-card-body--title">{{ y.name }}</div>
        <div class="meal-detail-card-body--total">
          {{ y.quantity }}
        </div>
        <div class="meal-detail-card-body-total--unit">{{ y.unit }}</div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-btn
        variant="flat"
        color="primary"
        class="btn-add px-12"
        rounded="xl"
        @click="addMeal(i)"
      >
        Ajouter
      </v-btn>
    </v-row>
    <v-divider class="mt-4"></v-divider>
  </v-container>
</template>

<script lang="ts">
import { createOnFoodByMeal } from "@/services/foodsBinds.services";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MealDetailCard",

  data() {
    return {
      myTitle: "Oui baguetee",
    };
  },

  props: {
    allFoods: {},
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
        idFood: mealDetail.id,
        quantity: 100,
      };
      createOnFoodByMeal(params);
      this.managementAddFoodInMealModal(false);
    },
  },
};
</script>
<style lang="scss" scoped>
.meal-detail--card {
  .meal-detail-card--header {
    .meal-detail-card-header--icon {
      font-size: 30px;
      color: orange;
    }
    .meal-detail-card-header--title {
      color: #36485e;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 300;
      text-align: center;
    }
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
}
.btn-add {
  opacity: 0.5;
}
</style>
