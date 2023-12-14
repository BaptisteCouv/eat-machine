import { createStore } from "vuex";

import { getAllListMeals, addOneMeal } from "@/services/meals.services";
import {
  getAllListFoodsNutritionals,
  addOneFoodNutritional,
  getOneFoodsNutritionalsByFoodBinds,
} from "@/services/foodsNutritionals.services";
import {
  getAllListCategory,
  addOneCategory,
} from "@/services/category.services";
import { getAllFoodsByMeals } from "@/services/foodsBinds.services";

import { IMeals } from "@/models/meals.models";
import { IFoodsNutritionals } from "@/models/foodsNutritionals.models";
import { ICategory } from "@/models/category.models";
import { IFoodsBinds } from "@/models/foodsBinds.models";

export default createStore({
  state: {
    showAddMealListModal: false,
    showAddFoodListModal: false,
    showAddFoodInMealModal: false,
    showAddCategoryModal: false,
    listAllMeals: {},
    listAllFoods: {},
    oneFoodByFoodBLind: {},
    listAllCategory: {},
    listFoodsByMeals: {},
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
    managementCategoryModal(state, isOpen) {
      console.log(isOpen);
      state.showAddCategoryModal = isOpen;
    },

    listAllMeals(state, listAllMeals) {
      state.listAllMeals = listAllMeals;
    },
    listAllFoods(state, listAllFoods) {
      state.listAllFoods = listAllFoods;
    },
    listAllCategory(state, listAllCategory) {
      state.listAllCategory = listAllCategory;
    },
    listFoodsByMeals(state, listFoodsByMeals) {
      state.listFoodsByMeals = listFoodsByMeals;
    },
    oneFoodByFoodBLind(state, oneFoodByFoodBLind) {
      state.oneFoodByFoodBLind = oneFoodByFoodBLind;
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
    managementCategoryModal({ commit }, params) {
      commit("managementCategoryModal", params);
    },

    // FOOD BIND --------------------------------------------------

    async getAllFoodsByMeals({ commit }, idMeal: string) {
      try {
        const data: IFoodsBinds[] = await getAllFoodsByMeals(idMeal);
        await commit("listFoodsByMeals", data);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    // CATEGORY --------------------------------------------------

    async getAllCategory({ commit }) {
      try {
        const data: ICategory[] = await getAllListCategory();
        commit("listAllCategory", data);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    async addNewOneCategory({ commit }, category) {
      try {
        await addOneCategory(category);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },

    // MEALS --------------------------------------------------
    async getAllMeals({ commit }) {
      try {
        const data: IMeals[] = await getAllListMeals();

        commit("listAllMeals", data);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    async addNewOneMeal({ commit }, meal) {
      try {
        await addOneMeal(meal);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
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

    async getOneFoodsNutritionalsByFoodBinds({ commit }, idMeal: any) {
      try {
        const data: IFoodsNutritionals[] =
          await getOneFoodsNutritionalsByFoodBinds(idMeal);
        commit("oneFoodByFoodBLind", data);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },
  },
  getters: {
    isManagementListMealModal: (state) => state.showAddMealListModal,
    isManagementListFoodModal: (state) => state.showAddFoodListModal,
    isManagementFoodInMealModal: (state) => state.showAddFoodInMealModal,
    isManagementCategoryModal: (state) => state.showAddCategoryModal,
    getListAllMeals: (state) => state.listAllMeals,
    getListAllFoods: (state) => state.listAllFoods,
    getListAllCategory: (state) => state.listAllCategory,
    getListFoodsByMeals: (state) => state.listFoodsByMeals,
    getoneFoodByFoodBLind: (state) => state.oneFoodByFoodBLind,
  },
});
