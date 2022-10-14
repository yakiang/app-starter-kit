import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    currentUserGetter: (state) => state.user,
  },
  mutations: {
    login(state, payload) {
      state.user = { name: payload };
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {
    login({ commit }, name) {
      setTimeout(() => commit("login", name), 1000);
    },
    logout({ commit }) {
      commit("logout");
    },
  },
});
