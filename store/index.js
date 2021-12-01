export const state = () => ({
  menuToggle: false
});

export const getters = {
  menuToggle: s => s.menuToggle
}

export const actions = {
  async nuxtServerInit({ dispatch, state }) {
    await dispatch('auth/checkToken');
  },
  async setMenuToggle({ commit }, value) {
    commit('SET_MENU_TOGGLE', { value });
  }
}

export const mutations = {
  SET_MENU_TOGGLE(state, payload) {
    state.menuToggle = payload.value;
  }
}