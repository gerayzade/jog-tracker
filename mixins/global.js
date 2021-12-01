import { mapActions, mapGetters } from 'vuex';

export const GlobalMixin = {
  computed: {
    ...mapGetters({
      loggedIn: 'auth/loggedIn',
      jogsTotal: 'jogs/total'
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