import { createStore } from "vuex";

import { getAllListMeals } from "@/services/meals.services";
import {
  getAllListFoodsNutritionals,
  addOneFoodNutritional,
} from "@/services/foodsNutritionals.services";

import { IMeals } from "@/models/meals.models";
import { IFoodsNutritionals } from "@/models/foodsNutritionals.models";

export default createStore({
  state: {
    showAddMealListModal: false,
    showAddFoodListModal: false,
    showAddFoodInMealModal: false,
    listAllMeals: {},
    listAllFoods: {},
  },
  mutations: {
    managementListMealModal(state, isOpen) {
      state.showAddMealListModal = isOpen;
    },
    managementListFoodModal(state, isOpen) {
      state.showAddFoodListModal = isOpen;
    },
    managementFoodInMealModal(state, isOpen) {
      state.showAddFoodInMealModal = isOpen;
    },
    listAllMeals(state, listAllMeals) {
      state.listAllMeals = listAllMeals;
    },
    listAllFoods(state, listAllFoods) {
      state.listAllFoods = listAllFoods;
    },
  },
  actions: {
    managementListMealModal({ commit }, params) {
      commit("managementListMealModal", params);
    },
    managementListFoodModal({ commit }, params) {
      commit("managementListFoodModal", params);
    },
    managementFoodInMealModal({ commit }, params) {
      commit("managementFoodInMealModal", params);
    },

    // MEALS --------------------------------------------------
    async getListAllMeals({ commit }) {
      try {
        const data: IMeals[] = await getAllListMeals();
        console.log(data);

        commit("listAllMeals", data);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    // FOODS --------------------------------------------------
    async getAllListFoodsNutritionals({ commit }) {
      try {
        const data: IFoodsNutritionals[] = await getAllListFoodsNutritionals();
        const newData: IFoodsNutritionals[] = [];
        data.forEach((element) => {
          const transformedObject: IFoodsNutritionals = {
            name: element.name,
            price: element.price,
            detail: [
              {
                icon: "mdi-fire",
                name: "Calories",
                quantity: element.calories,
                unit: "kcal",
                color: "red",
              },
              {
                icon: "mdi-food-drumstick-outline",
                name: "Protéines",
                quantity: element.protein,
                unit: "g",
                color: "blue",
              },
              {
                icon: "mdi-barley",
                name: "Glucides",
                quantity: element.carbohydrates,
                unit: "g",
                color: "green",
              },
              {
                icon: "mdi-lightning-bolt-outline",
                name: "Lipides",
                quantity: element.lipid,
                unit: "g",
                color: "orange",
              },
            ],
          };
          newData.push(transformedObject);
        });

        commit("listAllFoods", newData);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    async addNewOneFoodNutritional({ commit }, food) {
      try {        
        await addOneFoodNutritional(food);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },
  },
  getters: {
    isManagementListMealModal: (state) => state.showAddMealListModal,
    isManagementListFoodModal: (state) => state.showAddFoodListModal,
    isManagementFoodInMealModal: (state) => state.showAddFoodInMealModal,
    getListAllMeals: (state) => state.listAllMeals,
    getListAllFoods: (state) => state.listAllFoods,
  },
});
