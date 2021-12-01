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

const isDate = (date) => {
  return date.match(/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/) !== null;
}

const parseDate = (date, format) => {
  return typeof date === 'number' 
    ? moment.unix(date) 
    : (format ? moment(date, format) : moment(date));
}

export const getters = {
  filters: s => s.filters,
  totalCount: s => s.jogs.length,
  jogsList: s => sortBy(s.jogs, 'id')
    .filter((jog) => {
      let isAfter = !isDate(s.filters.dateFrom) || parseDate(jog.date).isAfter(parseDate(s.filters.dateFrom, 'DD/MM/YYYY'));
      let isBefore = !isDate(s.filters.dateTo) || parseDate(jog.date).isBefore(parseDate(s.filters.dateTo, 'DD/MM/YYYY'));
      return isAfter && isBefore;
    })
    .reverse()
    .map((jog) => ({
      ...jog,
      speed: Math.round((jog.distance / jog.time) * 100) / 100,
      humanize_date: parseDate(jog.date).format('DD.MM.YYYY')
    })),
  filteredCount: (_, g) => g.jogsList.length
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
  async deleteJog({ commit }, data) {
    await this.$axios.delete(`/data/jog?user_id=${data.user_id}&&jog_id=${data.jog_id}`);
    commit('DELETE_JOGS_DATA', { value: data });
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
  DELETE_JOGS_DATA(state, payload) {
    let index = state.jogs.findIndex(jog => jog.id === payload.value.jog_id);
    Vue.delete(state.jogs, index);
  },
  SET_JOGS_FILTER(state, payload) {
    Vue.set(state.filters, payload.key, payload.value);
  }
}