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
                {{ formatTime(category.mealTime) }}
              </v-chip>
              <v-btn
                v-if="isEditing"
                icon="mdi-pencil"
                size="x-small"
                variant="tonal"
                @click="actionClick(category, true)"
              ></v-btn>
              <v-btn
                v-if="isDeleting"
                icon="mdi-trash-can-outline"
                size="x-small"
                variant="tonal"
                @click="actionClick(category, true)"
              ></v-btn>
            </div>
          </div>
        </div>
        <v-sheet class="meal-card--body pb-6 pt-6">
          <v-row v-for="(meal, ii) in getListAllMeals" :key="ii">
            <template v-for="idCategory in meal.idCategory" :key="idCategory">
              <v-col cols="12" class="py-1" v-if="idCategory === category._id">
                <div
                  class="card d-flex align-center justify-space-between mx-4 pa-3"
                  :class="meal.isActive ? 'isActive' : ''"
                  @click="actionClick(meal, false)"
                >
                  <div class="card-name">
                    {{ meal.name }}
                  </div>
                  <v-icon v-if="isEditing">mdi-pencil</v-icon>
                  <v-icon v-else-if="isDeleting">mdi-trash-can-outline</v-icon>
                  <v-icon v-else-if="meal.recurrence">mdi-reload</v-icon>
                  <v-icon v-else-if="meal.dateSelect">
                    mdi-calendar-clock
                  </v-icon>
                </div>
              </v-col>
            </template>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="list-categorie">
        <div class="mb-2">
          <div
            class="meal-card--name mx-0 d-flex justify-space-between align-end"
          >
            <div class="name">Tous les plats</div>
          </div>
        </div>
        <v-sheet class="meal-card--body pb-6 pt-6">
          <v-row v-for="(meal, ii) in getListAllMeals" :key="ii">
            <v-col cols="12" class="py-1">
              <div
                class="card d-flex align-center justify-space-between mx-4 pa-3"
                :class="meal.isActive ? 'isActive' : ''"
                @click="actionClick(meal, false)"
              >
                <div class="card-name">
                  {{ meal.name }}
                </div>
                <v-icon v-if="isEditing">mdi-pencil</v-icon>
                <v-icon v-else-if="isDeleting">mdi-trash-can-outline</v-icon>
                <v-icon v-else-if="meal.recurrence">mdi-reload</v-icon>
                <v-icon v-else-if="meal.dateSelect">
                  mdi-calendar-clock
                </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ListFoodInMealModal from "@/components/listMeal/ListFoodInMealModal.vue";
import { ICategory } from "@/models/category.models";
import { IMeals } from "@/models/meals.models";

import { mapActions } from "vuex";

export default {
  name: "MealCard",
  components: {
    ListFoodInMealModal,
  },
  props: {
    getListAllCategory: {
      type: Object as () => ICategory[],
      required: true,
    },
    getListAllMeals: {
      type: Object as () => IMeals[],
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

  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "managementFoodInMealModal",
      "getAllFoodsByMeals",
      "addIdCurrentMealOpenend",
      "managementListMealModal",
      "managementCategoryModal",
      "deleteOneMeal",
      "listEditCurrentCategory",
      "deleteOneCategory",
      "changeOneMeal",
    ]),
    async actionClick(params: any, isCategory: boolean) {
      if (this.isEditing) {
        if (isCategory) {
          this.managementCategoryModal(true);
          this.listEditCurrentCategory(params);
        } else {
          this.$emit("openMealModal", params);
          this.managementListMealModal(true);
        }
      } else if (this.isDeleting) {
        if (isCategory) {
          this.getListAllMeals.forEach(async (element: any) => {
            let idCategory = element.idCategory.find(
              (e: any) => e === params._id
            );
            if (idCategory && idCategory === params._id) {
              for (let i = element.idCategory.length - 1; i >= 0; i--) {
                if (element.idCategory[i] === idCategory) {
                  element.idCategory.splice(i, 1); // Supprime l'élément à l'index i
                }
              }
            }
            await this.changeOneMeal(element);
          });

          this.deleteOneCategory(params._id);
        } else {
          this.deleteOneMeal(params._id);
        }
        const param = {
          refresh: true,
        };
        this.$emit("openMealModal", param);
      } else {
        this.openModalWithParam(params._id);
      }
    },
    openEditModalMeal() {
      this.managementFoodInMealModal(true);
    },
    openModalWithParam(idMeal: string) {
      this.managementFoodInMealModal(true);
      this.addIdCurrentMealOpenend(idMeal);
    },
    formatTime(value: number) {
      const hours = Math.floor(value);
      const minutes = (value % 1) * 60;
      return `${hours}:${String(minutes).padStart(2, "0")}`;
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
    color: #4d8f55;
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
      font-size: 13px;
      .card-name {
        color: #29252c;
        font-weight: 600;
      }
    }
  }
}

.isActive {
  background-color: rgba($color: #4d8f55, $alpha: 0.6) !important;
  color: white;
  .card-name {
    color: white !important;
    font-weight: 600;
  }
}
</style>
