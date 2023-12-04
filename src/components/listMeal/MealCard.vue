<template>
  <AddFoodInMealModal />

  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          class="meal-card--name mx-4 d-flex justify-space-between align-end"
        >
          <div>PEIT DEJEUNER DANS le cul</div>
          <v-btn icon="mdi-pencil" size="x-small" variant="tonal"></v-btn>
        </div>
        <v-sheet class="meal-card--body pb-6">
          <v-row class="pt-6">
            <v-col cols="12" class="py-1">
              <div class="card mx-4 pa-3" @click="openModalWithParam(true)">
                <div class="card-name">Petit déjeuner full protéine</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-1">
              <div class="card mx-4 pa-3">
                <div class="card-name">Réveil smoothie oklm</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-1">
              <div class="card mx-4 pa-3">
                <div class="card-name">Protéine pur dans le cul</div>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import AddFoodInMealModal from "@/components/listMeal/addFoodInMealModal.vue";

import { mapActions } from "vuex";

export default {
  name: "MealCard",
  components: {
    AddFoodInMealModal,
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions(["managementFoodInMealModal"]),
    
    openModalWithParam(isOpen: boolean) {
      this.managementFoodInMealModal(isOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.meal-card {
  &--name {
    color: #56dd65;
    font-size: 20px;
    font-weight: 300;
    text-overflow: ellipsis;
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
