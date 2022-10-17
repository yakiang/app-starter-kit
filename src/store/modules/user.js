import { login, logout } from "@/apis/user";

const defaultState = {
  token: "",
  name: "",
  avatar: "",
};

const mutations = {
  RESET: (state) => Object.assign(state, defaultState),
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response;
          const { name, token, avatar } = data;
          commit("RESET", token);
          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("RESET");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state: {
    ...defaultState,
  },
  mutations,
  actions,
};
