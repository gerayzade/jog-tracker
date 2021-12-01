import moment from 'moment';

export const state = () => ({
  jogs: []
});

export const getters = {
  jogsList: s => s.jogs.map((jog) => ({
    ...jog,
    speed: Math.round((jog.distance / jog.time) * 100) / 100,
    humanize_date: moment.unix(jog.date).format('DD.MM.YYYY')
  }))
}

export const actions = {
  async getJogsData({ commit }) {
    const { data: { response: { jogs } } } = await this.$axios.get('/data/sync');
    commit('SET_JOGS_DATA', { value: jogs });
  }
}

export const mutations = {
  SET_JOGS_DATA(state, payload) {
    state.jogs = payload.value;
  }
}