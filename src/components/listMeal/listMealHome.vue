<template>
  <AddMealListModal
    :getListAllCategory="getListAllCategory"
    :currentMealOpen="currentMealOpen"
    @some-event="getCategory()"
    @close-event="resetCurrentMealOpen"
  />
  <AddCategoryModal @some-event="getCategory()" />

  <v-container>
    <v-row>
      <v-col cols="12">
        <DefaultTitle title="Ajouter" />
        <v-row>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-plus"
              width="100%"
              rounded="lg"
              color="primary"
              @click="openCategoryModal(true)"
            >
              Repas
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-plus"
              width="100%"
              rounded="lg"
              color="primary"
              @click="managementListMealModal(true)"
            >
              Plats
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between">
          <DefaultTitle title="Liste des repas & plats" />
          <v-btn
            icon="mdi-pencil"
            size="x-small"
            variant="tonal"
            @click="isEditing = !isEditing"
          ></v-btn>
        </div>
        <listMealCard
          :getListAllCategory="getAllCategoryOrderByHour"
          :getListAllMeals="getListAllMeals"
          :isEditing="isEditing"
          @openMealModal="openMealModal"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import listMealCard from "@/components/listMeal/listMealCard.vue";
import AddMealListModal from "@/components/listMeal/addMealListModal.vue";
import AddCategoryModal from "@/components/listMeal/AddCategoryModal.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "listMealHome",
  components: {
    DefaultTitle,
    listMealCard,
    AddMealListModal,
    AddCategoryModal,
  },
  data() {
    return {
      getAllCategoryOrderByHour: [],
      isEditing: false,
      currentMealOpen: {},
    };
  },
  created() {
    this.getCategory();
  },
  computed: {
    ...mapGetters([
      "getListAllCategory",
      "getListAllMeals",
      "isManagementCategoryModal",
    ]),
  },
  methods: {
    ...mapActions([
      "managementListMealModal",
      "managementCategoryModal",
      "getAllCategory",
      "getAllMeals",
    ]),

    async getCategory() {
      await this.getAllCategory().then(() => {
        this.trierLesHeures(this.getListAllCategory);
      });
      this.getAllMeals();
    },
    openModalWithParam(isOpen: boolean) {
      this.managementListMealModal(isOpen);
    },
    openCategoryModal(isOpen: boolean) {
      this.managementCategoryModal(isOpen);
    },

    trierLesHeures(category: any) {
      category.sort((a: any, b: any) => {
        const heureA = a.mealTime;
        const heureB = b.mealTime;

        return heureA.localeCompare(heureB);
      });

      this.getAllCategoryOrderByHour = category;
    },
    openMealModal(params: object) {
      this.currentMealOpen = params;
    },
    resetCurrentMealOpen() {
      this.currentMealOpen = [];
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
