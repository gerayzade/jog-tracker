import Vue from 'vue';
import moment from 'moment';
import { sortBy } from 'underscore';

export const state = () => ({
  jogs: []
});

export const getters = {
  jogsList: s => sortBy(s.jogs, 'id').reverse().map((jog) => ({
    ...jog,
    speed: Math.round((jog.distance / jog.time) * 100) / 100,
    humanize_date: typeof jog.date === 'number' 
      ? moment.unix(jog.date).format('DD.MM.YYYY')
      : moment(jog.date).format('DD.MM.YYYY')
  }))
}

export const actions = {
  async getJogsData({ commit }) {
    const { data: { response: { jogs } } } = await this.$axios.get('/data/sync');
    commit('SET_JOGS_DATA', { value: jogs });
  },
  async addNewJog({ commit }, data) {
    const { data: { response } } = await this.$axios.post('/data/jog', data);
    commit('INSERT_JOGS_DATA', { value: response });
  },
  resetJogsData({ commit }) {
    commit('SET_JOGS_DATA', { value: [] });
  }
}

export const mutations = {
  SET_JOGS_DATA(state, payload) {
    state.jogs = payload.value;
  },
  INSERT_JOGS_DATA(state, payload) {
    Vue.set(state.jogs, state.jogs.length, payload.value);
  }
}