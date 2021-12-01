import Vue from 'vue';
import moment from 'moment';
import { sortBy } from 'underscore';

export const state = () => ({
  jogs: [],
  filters: {
    dateFrom: '',
    dateTo: ''
  }
});

export const getters = {
  jogsList: s => sortBy(s.jogs, 'id')
    .reverse()
    .map((jog) => ({
      ...jog,
      speed: Math.round((jog.distance / jog.time) * 100) / 100,
      humanize_date: typeof jog.date === 'number' 
        ? moment.unix(jog.date).format('DD.MM.YYYY')
        : moment(jog.date).format('DD.MM.YYYY')
    })),
  filters: s => s.filters
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
  async editJog({ commit }, data) {
    const { data: { response } } = await this.$axios.put('/data/jog', data);
    commit('UPDATE_JOGS_DATA', { value: response });
  },
  resetJogsData({ commit }) {
    commit('SET_JOGS_DATA', { value: [] });
  },
  setJogsFilter({ commit }, filter) {
    commit('SET_JOGS_FILTER', filter);
  }
}

export const mutations = {
  SET_JOGS_DATA(state, payload) {
    state.jogs = payload.value;
  },
  INSERT_JOGS_DATA(state, payload) {
    let index = state.jogs.length;
    Vue.set(state.jogs, index, payload.value);
  },
  UPDATE_JOGS_DATA(state, payload) {
    let index = state.jogs.findIndex(jog => jog.id === payload.value.id);
    Vue.set(state.jogs, index, payload.value);
  },
  SET_JOGS_FILTER(state, payload) {
    Vue.set(state.filters, payload.key, payload.value);
  }
}