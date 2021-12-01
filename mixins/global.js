import Vue from 'vue';

import { mapActions, mapGetters } from 'vuex';

Vue.use({
  install(Vue) {
    Vue.mixin({
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
    });
  }
});