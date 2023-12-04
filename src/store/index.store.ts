import { createStore } from "vuex";

export default createStore({
  state: {
    showAddMealListModal: false,
    showAddFoodListModal: false,
    showAddFoodInMealModal: false,
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
  },
  getters: {
    isManagementListMealModal: (state) => state.showAddMealListModal,
    isManagementListFoodModal: (state) => state.showAddFoodListModal,
    isManagementFoodInMealModal: (state) => state.showAddFoodInMealModal,
  },
});
