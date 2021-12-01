export const state = () => ({
  loggedIn: false
});

export const getters = {
  loggedIn: s => s.loggedIn
}

export const actions = {
  async checkToken({ commit }) {
    if (this.$cookies.get('access_token')) {
      try {
        await this.$axios.get('/auth/user');
        commit('SET_LOGGED_IN', { value: true });
      } catch(error) {
        // remove token if it is expired or invalid
        this.$cookies.remove('access_token');
      }
    }
  },
  async getToken({ commit }) {
    const { data: { response: { access_token } } } = await this.$axios.post('/auth/uuidLogin', {
      uuid: 'hello'
    });
    this.$cookies.set('access_token', access_token);
    commit('SET_LOGGED_IN', { value: true });
  },
  resetToken({ commit }) {
    this.$cookies.remove('access_token');
    commit('SET_LOGGED_IN', { value: false });
  }
}

export const mutations = {
  SET_LOGGED_IN(state, payload) {
    state.loggedIn = payload.value;
  }
}