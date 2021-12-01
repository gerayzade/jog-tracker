import { mapActions, mapGetters } from 'vuex';

export const GlobalMixin = {
  computed: {
    ...mapGetters({
      loggedIn: 'auth/loggedIn',
      jogsTotal: 'jogs/totalCount',
      jogsFiltered: 'jogs/filteredCount'
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