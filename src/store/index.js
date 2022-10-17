import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    user: {},
  },
  getters: {
    currentUserGetter: (state) => state.user,
  },
  mutations: {
    login(state, payload) {
      state.user = { name: payload.username };
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
