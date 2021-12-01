<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/" class="logo">
          <svg-icon name="logo" />
        </nuxt-link>
        <nav-menu @close-menu="setMenuToggle(false)" />
        <button :class="['filters-toggle', { 'active': filtersToggle }]" v-if="$route.name === 'jogs'" 
            @click="setFiltersToggle(!filtersToggle)">
          <svg-icon name="filter" />
        </button>
        <button class="menu-toggle" @click="setMenuToggle(!menuToggle)">
          <svg-icon :name="menuToggle ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NavMenu from '~/components/NavMenu';

export default {
  name: 'page-header',
  components: { 
    NavMenu
  },
  computed: {
    ...mapGetters({
      menuToggle: 'menuToggle',
      filtersToggle: 'filtersToggle'
    })
  },
  methods: {
    ...mapActions({
      setMenuToggle: 'setMenuToggle',
      setFiltersToggle: 'setFiltersToggle'
    })
  }
}
</script>