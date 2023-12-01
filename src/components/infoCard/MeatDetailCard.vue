<template>
  <v-container class="meat-detail--card" v-for="i in 3" :key="i">
    <v-row class="meat-detail-card--price">
      <v-col cols="12" class="pr-0 pb-0">
        <div class="d-flex justify-end">
          <v-chip color="primary" variant="flat"> 2,50 € </v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row class="meat-detail-card--header">
      <v-col cols="12" class="d-flex align-center flex-column pt-0">
        <div class="meat-detail-card-header--icon">
          <v-icon>mdi-flower-outline</v-icon>
        </div>
        <div class="meat-detail-card-header--title">Pancakes</div>
      </v-col>
    </v-row>
    <v-row class="meat-detail-card--body">
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meat-detail-card-body--title">Calories</div>
        <div class="meat-detail-card-body--total">53</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meat-detail-card-body--title">Protéines</div>
        <div class="meat-detail-card-body--total">63</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meat-detail-card-body--title">Glucides</div>
        <div class="meat-detail-card-body--total">176</div>
      </v-col>
      <v-col cols="3" class="d-flex align-center flex-column">
        <div class="meat-detail-card-body--title">Lipides</div>
        <div class="meat-detail-card-body--total">17</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "MeatDetailCard",

  data() {
    return {
      myTitle: "Oui baguetee",
    };
  },
};
</script>
<style lang="scss">
.meat-detail--card {
  .meat-detail-card--header {
    .meat-detail-card-header--icon {
      font-size: 30px;
      color: orange;
    }
    .meat-detail-card-header--title {
      color: #36485e;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 200;
    }
  }
  .meat-detail-card--body {
    .meat-detail-card-body--title {
      color: #333146;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 200;
    }
    .meat-detail-card-body--total {
      color: #36485e;
      font-size: 25px;
      font-weight: 700;
      line-height: 25px;
    }
  }
}
</style>
