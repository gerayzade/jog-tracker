export const state = () => ({
  user: {},
  loggedIn: false
});

export const getters = {
  user: s => s.user,
  loggedIn: s => s.loggedIn
}

export const actions = {
  async checkToken({ commit }) {
    if (!localStorage.getItem('access_token')) return;
    const { data } = await this.$axios.get('/auth/user');
    commit('SET_LOGGED_IN', { value: true });
  },
  async getToken({ commit }) {
    const { data: { response: { access_token } } } = await this.$axios.post('/auth/uuidLogin', {
      uuid: 'hello'
    });
    localStorage.setItem('access_token', JSON.stringify(access_token));
    commit('SET_LOGGED_IN', { value: true });
  },
  resetToken({ commit }) {
    localStorage.removeItem('access_token');
    commit('SET_LOGGED_IN', { value: false });
  }
}

export const mutations = {
  SET_LOGGED_IN(state, payload) {
    state.loggedIn = payload.value;
  }
}