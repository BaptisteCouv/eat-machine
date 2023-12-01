<template>
  <v-sheet class="meal-card">
    <DefaultTitle :title="myTitle" />
    <div class="meal-card--body pt-2">
      <v-container>
        <v-row class="meal-card-body--info">
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-food-drumstick-outline</v-icon>
            </div>
            <div class="meal-card-body--title">Protéines</div>
            <div class="meal-card-body--total">53</div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-barley</v-icon>
            </div>
            <div class="meal-card-body--title">Glucides</div>
            <div class="meal-card-body--total">123</div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meal-card-body--icon">
              <v-icon>mdi-lightning-bolt-outline</v-icon>
            </div>
            <div class="meal-card-body--title">Lipides</div>
            <div class="meal-card-body--total">17</div>
          </v-col>
        </v-row>
        <v-row class="meal-card-body--recap">
          <v-col cols="12" class="d-flex justify-center">
            <div
              class="meal-card-body--circle d-flex align-center justify-center flex-column"
            >
              <div class="meal-card-body--icon"><v-icon>mdi-fire</v-icon></div>
              <div class="meal-card-body--total">1562</div>
              <div class="meal-card-body--title">Calories</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
  <MealDetailCard />
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import MealDetailCard from "@/components/infoCard/MealDetailCard.vue";

export default {
  name: "MealCard",
  components: {
    DefaultTitle,
    MealDetailCard,
  },

  data() {
    return {
      myTitle: "Oui baguetee",
    };
  },
};
</script>
<style lang="scss">
.meal-card {
  .meal-card--body {
    background-color: #f6f6f6;
    border-radius: 8px;
    .meal-card-body--info {
      .meal-card-body--icon {
        color: #56dd65;
      }
      .meal-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 200;
      }
      .meal-card-body--total {
        color: #36485e;
        font-size: 36px;
        font-weight: 700;
        line-height: 36px;
      }
    }
    .meal-card-body--recap {
      .meal-card-body--circle {
        width: 170px;
        height: 170px;
        border: 7px solid #333146;
        border-radius: 50%;
      }
      .meal-card-body--icon {
        color: #56dd65;
        font-size: 36px;
      }
      .meal-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 300;
      }
      .meal-card-body--total {
        color: #333146;
        font-size: 42px;
        font-weight: 900;
        line-height: 36px;
      }
    }
  }
}
</style>
