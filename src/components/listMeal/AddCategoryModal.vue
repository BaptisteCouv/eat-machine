<template>
  <v-dialog
    v-model="isManagementCategoryModal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeCategoryModal()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>Retour</v-toolbar-title>
      </v-toolbar>

      <v-container>
        <DefaultTitle title="Créer un repas" />
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-text-field
              v-model="formData.name"
              label="Nom du repas"
            ></v-text-field>
            <div class="title-hour">heure du repas</div>
            <div class="hour">{{ formatTime(formData.mealTime) }} h</div>
            <v-slider
              v-model="formData.mealTime"
              :min="0"
              :max="24"
              :step="0.5"
              tick-size="6"
              tick-labels
            ></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0 d-flex justify-end">
            <v-btn
              variant="flat"
              class="btn-cancel px-6 mr-3"
              rounded="xl"
              @click="closeCategoryModal()"
            >
              Annuler
            </v-btn>

            <v-btn
              v-if="Object.keys(getListEditCurrentCategory).length !== 0"
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="changeCategoryData()"
            >
              Changer
            </v-btn>
            <v-btn
              v-else
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="addCategoryToList()"
            >
              Ajouter
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import DefaultTitle from "@/components/default/DefaultTitle.vue";
import { mapGetters, mapActions } from "vuex";

import { ICategory } from "@/models/category.models";

export default {
  name: "AddCategoryModal",

  components: {
    DefaultTitle,
  },
  data() {
    return {
      formData: {
        name: "",
        mealTime: 12,
      } as ICategory,
    };
  },
  watch: {
    isManagementCategoryModal() {
      if (Object.keys(this.getListEditCurrentCategory).length !== 0)
        this.formData = this.getListEditCurrentCategory;
    },
  },
  computed: {
    ...mapGetters(["isManagementCategoryModal", "getListEditCurrentCategory"]),
  },
  methods: {
    ...mapActions([
      "managementCategoryModal",
      "addNewOneCategory",
      "modifyCategory",
    ]),
    closeCategoryModal() {
      this.managementCategoryModal(false);
      this.formData = {
        name: "",
        mealTime: 12,
      };
    },
    addCategoryToList() {
      this.addNewOneCategory(this.formData);
      this.closeCategoryModal();
      this.$emit("some-event");
    },
    changeCategoryData() {
      this.modifyCategory(this.formData);
      this.closeCategoryModal();
      this.$emit("some-event");
    },
    formatTime(value: number) {
      const hours = Math.floor(value);
      const minutes = (value % 1) * 60;
      return `${hours}:${String(minutes).padStart(2, "0")}`;
    },
  },
};
</script>

<style lang="scss">
.text {
  color: #b9b9b9;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
}

.btn-add {
  color: white !important;
}
.btn-cancel {
  color: #a7a7a7 !important;
}

.title-hour {
  text-align: center;
  color: #36485e;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.8px;
}
.hour {
  text-align: center;
  color: #36485e;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 6.4px;
}
</style>
