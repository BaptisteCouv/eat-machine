import { createStore } from "vuex";

export default createStore({
  state: {
    token: null as string | null,
    userId: null as string | null,
    firstName: null as string | null,
    lastName: null as string | null,
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
    },
    setUserId(state, userId: string) {
      state.userId = userId;
    },
    setFirstName(state, firstName: string) {
      state.firstName = firstName;
    },
    setLastName(state, lastName: string) {
      state.lastName = lastName;
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      localStorage.removeItem("token");
    },
  },
  actions: {
    async getUserName({commit}) {
      try {
        // debugger;
        console.log(commit);
        
        // const userName = await getUserName(this.state.userId);
      } catch (error) {
        return "utilisateur inexistant ou incorrect !";
      }
    },    
  },
  getters: {

  },
});
