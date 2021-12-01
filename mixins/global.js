import Vue from 'vue';

import { mapActions, mapGetters } from 'vuex';

export const GlobalMixin = {
  computed: {
    ...mapGetters({
      loggedIn: 'auth/loggedIn'
    })
  },
  methods: {
    ...mapActions({})
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}