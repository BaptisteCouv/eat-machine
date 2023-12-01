<template>
  <addMeatListModal />

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
              @click="managementListMeatModal(true)"
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
        <ListMeatCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import ListMeatCard from "@/components/listMeat/listMeatCard.vue";
import addMeatListModal from "@/components/listMeat/addMeatListModal.vue";
import { mapActions } from "vuex";

export default {
  name: "listMeatHome",
  components: {
    DefaultTitle,
    ListMeatCard,
    addMeatListModal,
  },
  methods: {
    ...mapActions(["managementListMeatModal"]),

    openModalWithParam(isOpen: boolean) {
      this.managementListMeatModal(isOpen);
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
