<template>
  <v-sheet class="meat-card">
    <DefaultTitle :title="myTitle" />
    <div class="meat-card--body pt-2">
      <v-container>
        <v-row class="meat-card-body--info">
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meat-card-body--icon">
              <v-icon>mdi-food-drumstick-outline</v-icon>
            </div>
            <div class="meat-card-body--title">Protéines</div>
            <div class="meat-card-body--total">53</div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meat-card-body--icon">
              <v-icon>mdi-barley</v-icon>
            </div>
            <div class="meat-card-body--title">Glucides</div>
            <div class="meat-card-body--total">123</div>
          </v-col>
          <v-col cols="4" class="d-flex align-center flex-column">
            <div class="meat-card-body--icon">
              <v-icon>mdi-lightning-bolt-outline</v-icon>
            </div>
            <div class="meat-card-body--title">Lipides</div>
            <div class="meat-card-body--total">17</div>
          </v-col>
        </v-row>
        <v-row class="meat-card-body--recap">
          <v-col cols="12" class="d-flex justify-center">
            <div
              class="meat-card-body--circle d-flex align-center justify-center flex-column"
            >
              <div class="meat-card-body--icon"><v-icon>mdi-fire</v-icon></div>
              <div class="meat-card-body--total">1562</div>
              <div class="meat-card-body--title">Calories</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
  <MeatDetailCard />
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import MeatDetailCard from "@/components/infoCard/MeatDetailCard.vue";

export default {
  name: "MeatCard",
  components: {
    DefaultTitle,
    MeatDetailCard,
  },

  data() {
    return {
      myTitle: "Oui baguetee",
    };
  },
};
</script>
<style lang="scss">
.meat-card {
  .meat-card--body {
    background-color: #f6f6f6;
    border-radius: 8px;
    .meat-card-body--info {
      .meat-card-body--icon {
        color: #56dd65;
      }
      .meat-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 200;
      }
      .meat-card-body--total {
        color: #36485e;
        font-size: 36px;
        font-weight: 700;
        line-height: 36px;
      }
    }
    .meat-card-body--recap {
      .meat-card-body--circle {
        width: 170px;
        height: 170px;
        border: 7px solid #333146;
        border-radius: 50%;
      }
      .meat-card-body--icon {
        color: #56dd65;
        font-size: 36px;
      }
      .meat-card-body--title {
        color: #333146;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 300;
      }
      .meat-card-body--total {
        color: #333146;
        font-size: 42px;
        font-weight: 900;
        line-height: 36px;
      }
    }
  }
}
</style>
