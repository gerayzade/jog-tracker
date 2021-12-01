<template>
  <div class="jogs-filters">
    <div class="jogs-filters__inner">
      <div class="form-group">
        <label for="input-date-from">Date from</label>
        <input class="text-input" type="text" id="input-date-from" 
          v-mask="$dateInputMask()" v-model="dateFrom" />
      </div>
      <div class="form-group">
        <label for="input-date-to">Date to</label>
        <input class="text-input" type="text" id="input-date-to" 
          v-mask="$dateInputMask()" v-model="dateTo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'jogs-filters',
  computed: {
    ...mapGetters({
      filters: 'jogs/filters'
    }),

    dateFrom: {
      get() {
        return this.filters.dateFrom;
      },
      set(value) {
        this.setJogsFilter({ key: 'dateFrom', value });
      }
    },
    dateTo: {
      get() {
        return this.filters.dateTo;
      },
      set(value) {
        this.setJogsFilter({ key: 'dateTo', value });
      }
    }
  },
  methods: {
    ...mapActions({
      setJogsFilter: 'jogs/setJogsFilter',
      setFiltersToggle: 'setFiltersToggle'
    })
  },
  beforeDestroy() {
    this.dateFrom = '';
    this.dateTo = '';
    this.setFiltersToggle(false);
  }
}
</script>