<template>
  <div class="list-meal-card-unit d-flex">
    <v-text-field
      v-model="quantityVariable"
      class="mr-4 test"
      label="Quantité en gramme"
      suffix="g"
      @keyup.enter="convertPrice()"
      @blur="convertPrice()"
    ></v-text-field>
    <v-btn
      class="mr-2"
      density="default"
      icon="mdi-check"
      variant="tonal"
      @click="convertPrice()"
    ></v-btn>
  </div>
  <div class="list-meal-card--list pt-4">
    <!-- Pour maintenir la cohérence visuelle et achever l'intégration du composant "MealDetailCard" dans le but de rendre le contenu dynamique et harmonieux avec les autres éléments -->
    <div v-for="food in tempData" :key="food">
      <MealDetailCard
        :nutritionalsData="food"
        :currentQuantity="quantityVariable"
        :edit-mode="editMode"
        @delete-data="deleteData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MealDetailCard from "@/components/infoCard/MealDetailCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "listFoodCard",
  components: { MealDetailCard },

  data() {
    return {
      quantityVariable: 100,
      tempData: [],
      originalTempData: [],
    };
  },
  props: {
    editMode: {
      type: Boolean,
    },
  },
  created() {
    this.getAllListFoods();
  },
  computed: {
    ...mapState({
      listAllFoods: (state: any) => state.listAllFoods,
    }),
  },
  methods: {
    ...mapActions(["getAllListFoodsNutritionals", "deleteOneFoodNutritional"]),

    getAllListFoods() {
      this.getAllListFoodsNutritionals().then(() => {
        this.tempData = this.listAllFoods;
        this.originalTempData = JSON.parse(JSON.stringify(this.listAllFoods));

        this.convertPrice();
      });
    },
    convertPrice() {
      this.tempData = JSON.parse(JSON.stringify(this.originalTempData));

      this.tempData.forEach((element: any) => {
        element.calories = parseFloat(
          ((this.quantityVariable / 100) * element.calories).toFixed(1)
        );
        element.protein = parseFloat(
          ((this.quantityVariable / 100) * element.protein).toFixed(1)
        );
        element.lipid = parseFloat(
          ((this.quantityVariable / 100) * element.lipid).toFixed(1)
        );
        element.carbohydrates = parseFloat(
          ((this.quantityVariable / 100) * element.carbohydrates).toFixed(1)
        );
        let price = (element.price * this.quantityVariable) / 1000;
        element.price = parseFloat(price.toFixed(1));
      });
    },
    async deleteData(id: string) {
      await this.deleteOneFoodNutritional(id);
      this.getAllListFoods();
    },
  },
};
</script>

<style lang="scss">
.list-meal-card--list {
  .list-meal-card-list--sheet {
    border-radius: 8px;
    background-color: #f6f6f6;
  }
}
.list-meal-card-list-icon {
  height: 100%;
}
.list-meal-card-list-title {
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
}
.test {
  text-align: right;
}
</style>
