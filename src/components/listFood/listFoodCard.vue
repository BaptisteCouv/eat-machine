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
  <div class="list-meal-card--chips">
    <v-chip
      v-for="(i, e) in chipsDetail"
      :key="e"
      :append-icon="i.icon"
      :color="i.color"
      class="ma-1"
    >
      {{ i.name }}
    </v-chip>
  </div>
  <div class="list-meal-card--list pt-4">
    <!-- Pour maintenir la cohérence visuelle et achever l'intégration du composant "MealDetailCard" dans le but de rendre le contenu dynamique et harmonieux avec les autres éléments -->
    <MealDetailCard :allFoods="tempData" />
    <!-- <v-sheet
      class="list-meal-card-list--sheet my-2"
      v-for="(i, e) in tempData"
      :key="e"
    >
      <v-container>
        <v-row>
          <v-col cols="2">
            <div
              class="list-meal-card-list-icon d-flex align-center justify-center"
            >
              <v-icon>mdi-star</v-icon>
            </div>
          </v-col>
          <v-col cols="10" class="d-flex align-center">
            <v-row class="pb-2">
              <div class="list-meal-card-list-title">{{ i.name }}</div>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-chip
                v-for="(y, e) in i.detail"
                :key="e"
                size="small"
                :append-icon="y.icon"
                :color="y.color"
                class="list-meal-card-list-title mb-1 mr-1"
              >
                {{ y.quantity }} <span class="ml-1">{{ y.unit }}</span>
              </v-chip>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet> -->
  </div>
</template>

<script lang="ts">
import MealDetailCard from "@/components/infoCard/MealDetailCard.vue";

export default {
  name: "listFoodCard",
  components: { MealDetailCard },

  data() {
    return {
      quantityVariable: 100,
      chipsDetail: [
        {
          icon: "mdi-fire",
          name: "Calories",
          color: "red",
        },
        {
          icon: "mdi-food-drumstick-outline",
          name: "Protéines",
          color: "blue",
        },
        {
          icon: "mdi-barley",
          name: "Glucides",
          color: "green",
        },
        {
          icon: "mdi-lightning-bolt-outline",
          name: "Lipides",
          color: "orange",
        },
        {
          icon: "mdi-currency-eur",
          name: "Prix",
          color: "grey",
        },
      ],
      tempData: [
        {
          icon: "mdi-fire",
          name: "Amandes",
          price: 11.98,
          detail: [
            {
              icon: "mdi-fire",
              name: "Calories",
              quantity: 619,
              unit: "kcal",
              color: "red",
            },
            {
              icon: "mdi-food-drumstick-outline",
              name: "Protéines",
              quantity: 24,
              unit: "g",
              color: "blue",
            },
            {
              icon: "mdi-barley",
              name: "Glucides",
              quantity: 5.7,
              unit: "g",
              color: "green",
            },
            {
              icon: "mdi-lightning-bolt-outline",
              name: "Lipides",
              quantity: 54,
              unit: "g",
              color: "orange",
            },
          ],
        },
        {
          icon: "mdi-food-drumstick-outline",
          name: "Poulet",
          price: 1.8,
          detail: [
            {
              icon: "mdi-fire",
              name: "Calories",
              quantity: 1203,
              unit: "kcal",
              color: "red",
            },
            {
              icon: "mdi-food-drumstick-outline",
              name: "Protéines",
              quantity: 45,
              unit: "g",
              color: "blue",
            },
            {
              icon: "mdi-barley",
              name: "Glucides",
              quantity: 12,
              unit: "g",
              color: "green",
            },
            {
              icon: "mdi-lightning-bolt-outline",
              name: "Lipides",
              quantity: 45,
              unit: "g",
              color: "orange",
            },
          ],
        },
        {
          icon: "mdi-barley",
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 11.98,
          detail: [
            {
              icon: "mdi-fire",
              name: "Calories",
              quantity: 2512,
              unit: "kcal",
              color: "red",
            },
            {
              icon: "mdi-food-drumstick-outline",
              name: "Protéines",
              quantity: 80,
              unit: "g",
              color: "blue",
            },
            {
              icon: "mdi-barley",
              name: "Glucides",
              quantity: 120,
              unit: "g",
              color: "green",
            },
            {
              icon: "mdi-lightning-bolt-outline",
              name: "Lipides",
              quantity: 32,
              unit: "g",
              color: "orange",
            },
          ],
        },
        {
          icon: "mdi-lightning-bolt-outline",
          name: "Pancakes",
          price: 11.98,
          detail: [
            {
              icon: "mdi-fire",
              name: "Calories",
              quantity: 2512,
              unit: "kcal",
              color: "red",
            },
            {
              icon: "mdi-food-drumstick-outline",
              name: "Protéines",
              quantity: 80,
              unit: "g",
              color: "blue",
            },
            {
              icon: "mdi-barley",
              name: "Glucides",
              quantity: 120,
              unit: "g",
              color: "green",
            },
            {
              icon: "mdi-lightning-bolt-outline",
              name: "Lipides",
              quantity: 32,
              unit: "g",
              color: "orange",
            },
          ],
        },
        {
          icon: "mdi-currency-eur",
          name: "Pute",
          price: 11.98,
          detail: [
            {
              icon: "mdi-fire",
              name: "Calories",
              quantity: 2512,
              unit: "kcal",
              color: "red",
            },
            {
              icon: "mdi-food-drumstick-outline",
              name: "Protéines",
              quantity: 80,
              unit: "g",
              color: "blue",
            },
            {
              icon: "mdi-barley",
              name: "Glucides",
              quantity: 120,
              unit: "g",
              color: "green",
            },
            {
              icon: "mdi-lightning-bolt-outline",
              name: "Lipides",
              quantity: 32,
              unit: "g",
              color: "orange",
            },
          ],
        },
      ],
      originalTempData: [],
    };
  },
  mounted() {
    this.originalTempData = JSON.parse(JSON.stringify(this.tempData));
  },
  methods: {
    convertPrice() {
      this.tempData = JSON.parse(JSON.stringify(this.originalTempData));
      this.tempData.forEach((element) => {
        element.detail.forEach((detailElement) => {
          // Rajouter une condition pour savoir si il est a l'unité ou non
          let a = (this.quantityVariable / 100) * detailElement.quantity;
          detailElement.quantity = parseFloat(a.toFixed(1));
        });
        const prixElement = element.detail.find(
          (detailItem) => detailItem.name === "Prix"
        );
        if (prixElement) {
          const prix = prixElement.quantity;
          let price = (prix * this.quantityVariable) / 1000;
          prixElement.quantity = parseFloat(price.toFixed(1));
        }
      });
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
