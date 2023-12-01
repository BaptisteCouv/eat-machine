<template>
  <v-container class="meal-detail--card" v-for="i in 3" :key="i">
    <v-row class="meal-detail-card--price">
      <v-col cols="12" class="pr-0 pb-0">
        <div class="d-flex justify-end">
          <v-chip color="primary" variant="flat"> 2,50 € </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row class="meal-detail-card--header">
      <v-col cols="12" class="d-flex align-center flex-column pt-0">
        <div class="meal-detail-card-header--icon">
          <v-icon>mdi-flower-outline</v-icon>
        </div>
        <div class="meal-detail-card-header--title">Pancakes</div>
      </v-col>
    </v-row>
    <v-row class="meal-detail-card--body">
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meal-detail-card-body--title">Calories</div>
        <div class="meal-detail-card-body--total">53</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meal-detail-card-body--title">Protéines</div>
        <div class="meal-detail-card-body--total">63</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meal-detail-card-body--title">Glucides</div>
        <div class="meal-detail-card-body--total">176</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meal-detail-card-body--title">Lipides</div>
        <div class="meal-detail-card-body--total">17</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "MealDetailCard",

  data() {
    return {
      myTitle: "Oui baguetee",
    };
  },
};
</script>
<style lang="scss">
.meal-detail--card {
  .meal-detail-card--header {
    .meal-detail-card-header--icon {
      font-size: 30px;
      color: orange;
    }
    .meal-detail-card-header--title {
      color: #36485e;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 200;
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
  }
}
</style>
