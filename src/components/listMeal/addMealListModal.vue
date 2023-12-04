<template>
  <v-dialog
    v-model="isManagementListMealModal"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeListMealModal()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title>Dans le cul</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <DefaultTitle title="Créer un repas" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-text-field
              v-model="formData.name"
              label="Nom de l'aliment"
            ></v-text-field>
            <v-switch
              v-model="formData.recurrence"
              label="Tous les jours ?"
              color="primary"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-dialog ref="dialog" v-model="dialogVisible" persistent>
              <template v-slot:activator="{}">
                <v-text-field
                  v-model="textFieldDate"
                  label="Choisir une date"
                  prepend-icon="mdi-calendar"
                  readonly
                  :disabled="formData.recurrence"
                  @click="dialogVisible = true"
                ></v-text-field>
              </template>
              <v-date-picker v-model="formData.dateSelect">
                <!-- <v-spacer></v-spacer> -->
                <v-btn color="primary" @click="dialogVisible = false">
                  Cancel
                </v-btn>
                <v-btn color="primary" @click="saveDate"> OK </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-autocomplete
              chips
              label="Sélectionner une catégories"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0 d-flex justify-end">
            <v-btn
              variant="flat"
              class="btn-cancel px-6 mr-3"
              rounded="xl"
              @click="closeListMealModal()"
            >
              Annuler
            </v-btn>
            <v-btn
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="addMealToList()"
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
import { mapGetters, mapActions } from "vuex";
import DefaultTitle from "@/components/default/DefaultTitle.vue";

export default {
  name: "addMealListModal",

  components: {
    DefaultTitle,
  },
  data() {
    return {
      dialogVisible: false,
      textFieldDate: "",
      formData: {
        name: "",
        recurrence: false,
        dateSelect: null,
        mealTime: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isManagementListMealModal"]),
  },
  methods: {
    ...mapActions(["managementListMealModal"]),
    closeListMealModal() {
      this.managementListMealModal(false);
      this.formData = {
        recurrence: false,
        name: "",
        dateSelect: null,
        mealTime: "",
      };
      this.textFieldDate = "";
    },
    addMealToList() {
      this.closeListMealModal();
    },
    saveDate() {
      if (!this.formData.dateSelect) return "";

      const date = new Date(this.formData.dateSelect);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDay = day < 10 ? "0" + day : day;
      const formattedMonth = month < 10 ? "0" + month : month;
      const dateSelect = `${formattedDay}/${formattedMonth}/${year}`;
      this.textFieldDate = dateSelect;
      this.dialogVisible = false;
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
</style>
