<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <DefaultTitle title="Gestion" />
        <v-row>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-format-list-bulleted"
              width="100%"
              rounded="lg"
              color="primary"
              @click="goToListMeat()"
            >
              Mes aliments
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="gestion-btn"
              append-icon="mdi-food-outline"
              width="100%"
              rounded="lg"
              color="primary"
            >
              Mes repas
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <MeatCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MeatCard from "@/components/infoCard/MeatCard.vue";
import DefaultTitle from "@/components/default/DefaultTitle.vue";

export default {
  name: "Homepage",
  components: {
    MeatCard,
    DefaultTitle,
  },
  methods: {
    goToListMeat() {
      this.$router.push("/listMeat");
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
