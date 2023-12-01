import { createStore } from "vuex";

export default createStore({
  state: {
    showAddMealListModal: false,
  },
  mutations: {
    managementListMealModal(state, isOpen) {
      state.showAddMealListModal = isOpen;
    },
  },
  actions: {
    managementListMealModal({ commit }, params) {
      commit("managementListMealModal", params);
    },
  },
  getters: {
    isManagementListMealModal: (state) => state.showAddMealListModal,
  },
});
