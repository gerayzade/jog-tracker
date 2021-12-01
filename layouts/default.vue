<template>
  <div :class="['layout', {'menu-open': menuToggle}]">
    <svg-sprite />
    <page-header />
    <transition-expand>
      <jogs-filters v-if="filtersToggle && $route.name === 'jogs'"/>
    </transition-expand>
    <transition name="fade">
      <nuxt />
    </transition>
    <page-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PageHeader from '~/components/PageHeader';
import PageFooter from '~/components/PageFooter';
import SvgSprite from '~/components/SvgSprite';

import JogsFilters from '~/components/JogsFilters';
import TransitionExpand from '~/components/TransitionExpand';

export default {
  name: 'layout-default',
  components: {
    PageHeader,
    PageFooter,
    SvgSprite,
    JogsFilters,
    TransitionExpand
  },
  computed: {
    ...mapGetters({
      menuToggle: 'menuToggle',
      filtersToggle: 'filtersToggle'
    })
  }
}
</script>