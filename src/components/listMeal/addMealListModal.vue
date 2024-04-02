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
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <DefaultTitle title="Ajouter un plats" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-text-field
              v-model="formData.name"
              label="Nom du plat"
            ></v-text-field>
            <v-switch
              v-model="formData.recurrence"
              label="Consommer tous les jours ?"
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
                <v-btn color="primary" @click="dialogVisible = false">
                  Cancel
                </v-btn>
                <v-btn color="primary" @click="saveDate"> OK </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-autocomplete
              v-model="tempCategorySelected"
              chips
              label="Associer à un ou des repas"
              :items="getNamesFromListAllCategory()"
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
              v-if="Object.keys(currentMealOpen).length !== 0"
              variant="flat"
              color="primary"
              class="btn-add px-12"
              rounded="xl"
              @click="changeMeal()"
            >
              Changer
            </v-btn>
            <v-btn
              v-else
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

import { ICategory } from "@/models/category.models";

export default {
  name: "addMealListModal",

  components: {
    DefaultTitle,
  },
  data() {
    return {
      dialogVisible: false,
      textFieldDate: "" as string,
      formData: {} as any,
      tempCategorySelected: [] as any,
    };
  },
  props: {
    getListAllCategory: {
      type: Array as () => ICategory[],
      required: true,
    },
    currentMealOpen: {
      type: Object as () => any,
      required: false,
    },
  },
  watch: {
    isManagementListMealModal(): void {
      if (
        this.isManagementListMealModal &&
        this.currentMealOpen &&
        Object.keys(this.currentMealOpen).length !== 0
      ) {
        this.formData = { ...this.formData, ...this.currentMealOpen };

        if (!this.tempCategorySelected) {
          this.tempCategorySelected = [];
        }

        if (this.formData.dateSelect !== null) {
          const currentDate: any = new Date(this.formData.dateSelect);
          if (this.formData && this.formData.dateSelect) {
            this.formData.dateSelect = currentDate;
            this.textFieldDate = this.convertDate(currentDate);
          }
        }

        this.tempCategorySelected = this.getListAllCategory
          .filter((category: ICategory) =>
            this.formData.idCategory.includes(category._id)
          )
          .map((category: ICategory) => category.name);
      } else {
        // console.log("rajouter la date actuel dans le cahamp date");
      }
    },
  },
  computed: {
    ...mapGetters(["isManagementListMealModal"]),
  },
  methods: {
    ...mapActions([
      "managementListMealModal",
      "addNewOneMeal",
      "changeOneMeal",
    ]),
    closeListMealModal() {
      this.managementListMealModal(false);
      this.formData = {
        recurrence: false,
        name: "",
        dateSelect: null,
        idCategory: [],
        isActive: false,
      };
      this.tempCategorySelected = [];
      this.textFieldDate = "";
      this.$emit("close-event");
    },
    addMealToList() {
      this.valid();
      this.addNewOneMeal(this.formData);
      this.closeListMealModal();
      this.$emit("some-event");
    },
    convertDate(dateParams: string) {
      const date = new Date(dateParams);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDay = day < 10 ? "0" + day : day;
      const formattedMonth = month < 10 ? "0" + month : month;
      const dateSelect = `${formattedDay}/${formattedMonth}/${year}`;
      return dateSelect;
    },
    saveDate() {
      if (!this.formData.dateSelect) return "";
      this.textFieldDate = this.convertDate(this.formData.dateSelect);
      this.dialogVisible = false;
    },
    getNamesFromListAllCategory() {
      return this.getListAllCategory.map((item: any) => item.name);
    },
    valid() {
      if (this.formData && this.formData.idCategory) {
        this.formData.idCategory = [];
        this.tempCategorySelected.forEach((element: any) => {
          let temp = this.getListAllCategory.find(
            (e: any) => e.name === element
          );
          if (temp) {
            this.formData.idCategory.push(temp._id);
          }
        });
      }
    },
    changeMeal() {
      this.valid();
      this.changeOneMeal(this.formData);
      this.closeListMealModal();
      this.$emit("some-event");
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
