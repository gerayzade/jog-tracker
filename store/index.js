export const state = () => ({
  menuToggle: false,
  filtersToggle: false
});

export const getters = {
  menuToggle: s => s.menuToggle,
  filtersToggle: s => s.filtersToggle
}

export const actions = {
  async nuxtServerInit({ dispatch, state }) {
    await dispatch('auth/checkToken');
  },
  async setMenuToggle({ commit }, value) {
    commit('SET_MENU_TOGGLE', { value });
  },
  async setFiltersToggle({ commit }, value) {
    commit('SET_FILTERS_TOGGLE', { value });
  }
}

export const mutations = {
  SET_MENU_TOGGLE(state, payload) {
    state.menuToggle = payload.value;
  },
  SET_FILTERS_TOGGLE(state, payload) {
    state.filtersToggle = payload.value;
  }
}