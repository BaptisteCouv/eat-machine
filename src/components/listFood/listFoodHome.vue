<template>
  <addFoodListModal @some-event="handleEventFromChild" />

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
              @click="managementListFoodModal(true)"
            >
              Aliments
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <DefaultTitle title="Liste des aliments" />
        <ListMealCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import ListMealCard from "@/components/listFood/listFoodCard.vue";
import addFoodListModal from "@/components/listFood/addFoodListModal.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "listFoodHome",
  components: {
    DefaultTitle,
    ListMealCard,
    addFoodListModal,
  },
  methods: {
    ...mapActions(["managementListFoodModal"]),

    openModalWithParam(isOpen: boolean) {
      this.managementListFoodModal(isOpen);
    },
    handleEventFromChild() {
      console.log("passe");
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
