export const state = () => ({
  menuToggle: false
});

export const getters = {
  menuToggle: s => s.menuToggle
}

export const actions = {
  async setMenuToggle({ commit }, value) {
    commit('SET_MENU_TOGGLE', { value });
  }
}

export const mutations = {
  SET_MENU_TOGGLE(state, payload) {
    state.menuToggle = payload.value;
  }
}