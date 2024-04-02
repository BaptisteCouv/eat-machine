import { createStore } from "vuex";

import {
  getAllListMeals,
  addOneMeal,
  getMealName,
  changeOneMeal,
  deleteOneMeal,
} from "@/services/meals.services";
import {
  getAllListFoodsNutritionals,
  addOneFoodNutritional,
  getOneFoodsNutritionalsByFoodBinds,
  deleteOneFoodNutritional,
} from "@/services/foodsNutritionals.services";
import {
  getAllListCategory,
  addOneCategory,
  modifyCategory,
  deleteOneCategory,
} from "@/services/category.services";
import {
  getAllFoodsByMeals,
  modifyFoodsByMeals,
  deleteOneFoodByMeal,
} from "@/services/foodsBinds.services";

import { IMeals } from "@/models/meals.models";
import { IFoodsNutritionals } from "@/models/foodsNutritionals.models";
import { ICategory } from "@/models/category.models";
import { IFoodsBinds } from "@/models/foodsBinds.models";

export default createStore({
  state: {
    showAddMealListModal: false,
    showAddFoodListModal: false,
    showListFoodInMealModal: false,
    showAddFoodInMealModal: false,
    showAddCategoryModal: false,
    idCurrentMealOpenend: "",
    listEditCurrentCategory: {},
    listAllMeals: {},
    listAllFoods: {},
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
      state.showListFoodInMealModal = isOpen;
    },
    managementAddFoodInMealModal(state, isOpen) {
      state.showAddFoodInMealModal = isOpen;
    },
    managementCategoryModal(state, isOpen) {
      state.showAddCategoryModal = isOpen;
    },
    addIdCurrentMealOpenend(state, id) {
      state.idCurrentMealOpenend = id;
    },
    listEditCurrentCategory(state, listEditCurrentCategory) {
      state.listEditCurrentCategory = listEditCurrentCategory;
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
    managementAddFoodInMealModal({ commit }, params) {
      commit("managementAddFoodInMealModal", params);
    },
    listEditCurrentCategory({ commit }, params) {
      commit("listEditCurrentCategory", params);
    },
    managementCategoryModal({ commit }, params) {
      commit("managementCategoryModal", params);
    },
    addIdCurrentMealOpenend({ commit }, params) {
      commit("addIdCurrentMealOpenend", params);
    },

    // FOOD BIND --------------------------------------------------

    async getAllFoodsByMeals({ commit }, idMeal: string) {
      try {
        const data: IFoodsBinds[] = await getAllFoodsByMeals(idMeal);
        if (data) {
          await commit("listFoodsByMeals", data);
        }
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    async modifyFoodsByMeals(
      { commit },
      { idFoodMeal, quantity }: { idFoodMeal: string; quantity: number }
    ) {
      try {
        await modifyFoodsByMeals(idFoodMeal, quantity);
      } catch (error) {
        console.error("Erreur lors de l'ajout du contrat");
      }
    },

    async deleteOneFoodByMeal({ commit }, idFoodBind: string) {
      try {
        await deleteOneFoodByMeal(idFoodBind);
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

    async modifyCategory({ commit }, category) {
      try {
        await modifyCategory(category);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },

    async deleteOneCategory({ commit }, categoryId: string) {
      try {
        await deleteOneCategory(categoryId);
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

    async getMealName({ commit }, idMeal: string) {
      try {
        return await getMealName(idMeal);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },

    async changeOneMeal({ commit }, mealBody: any) {
      try {
        await changeOneMeal(mealBody);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },

    async deleteOneMeal({ commit }, mealId: string) {
      try {
        await deleteOneMeal(mealId);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },

    // FOODS --------------------------------------------------
    async getAllListFoodsNutritionals({ commit }) {
      try {
        const data: IFoodsNutritionals[] = await getAllListFoodsNutritionals();

        commit("listAllFoods", data);
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
    
    // A VOIR
    // async getOneFoodsNutritionalsByFoodBinds({ commit }, idMeal: any) {
    //   try {
    //     const data: IFoodsNutritionals[] =
    //       await getOneFoodsNutritionalsByFoodBinds(idMeal);
    //     let newData: IFoodsNutritionals[] = [];
    //     data.forEach((element) => {
    //       const transformedObject = [
    //         {
    //           name: "Calories",
    //           quantity: element.calories,
    //           unit: "kcal",
    //         },
    //         {
    //           name: "Protéines",
    //           quantity: element.protein,
    //           unit: "g",
    //         },
    //         {
    //           name: "Glucides",
    //           quantity: element.carbohydrates,
    //           unit: "g",
    //         },
    //         {
    //           name: "Lipides",
    //           quantity: element.lipid,
    //           unit: "g",
    //         },
    //       ];
    //       newData = transformedObject;
    //     });
    //     return newData;
    //   } catch (error) {
    //     console.error("Erreur lors de l'ajout du contrat");
    //   }
    // },
    async deleteOneFoodNutritional({ commit }, id) {
      try {
        await deleteOneFoodNutritional(id);
      } catch (error) {
        console.error("Erreur lors de l'ajout du aliment");
      }
    },
  },
  getters: {
    isManagementListMealModal: (state) => state.showAddMealListModal,
    isManagementListFoodModal: (state) => state.showAddFoodListModal,
    isManagementFoodInMealModal: (state) => state.showListFoodInMealModal,
    isManagementAddFoodInMealModal: (state) => state.showAddFoodInMealModal,
    isManagementCategoryModal: (state) => state.showAddCategoryModal,
    isAddIdCurrentMealOpenend: (state) => state.idCurrentMealOpenend,
    getListEditCurrentCategory: (state) => state.listEditCurrentCategory,
    getListAllMeals: (state) => state.listAllMeals,
    getListAllFoods: (state) => state.listAllFoods,
    getListAllCategory: (state) => state.listAllCategory,
    getListFoodsByMeals: (state) => state.listFoodsByMeals,
  },
});
