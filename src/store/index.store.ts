import { createStore } from "vuex";

export default createStore({
  state: {
    showAddMeatListModal: false,
  },
  mutations: {
    managementListMeatModal(state, isOpen) {
      state.showAddMeatListModal = isOpen;
    },
  },
  actions: {
    managementListMeatModal({ commit }, params) {
      commit("managementListMeatModal", params);
    },
  },
  getters: {
    isManagementListMeatModal: (state) => state.showAddMeatListModal,
  },
});
