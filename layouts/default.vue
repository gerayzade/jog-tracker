<template>
  <div :class="['layout', {'menu-open': menuToggle}]">
    <svg-sprite />
    <page-header />
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

export default {
  name: 'layout-default',
  components: {
    PageHeader,
    PageFooter,
    SvgSprite
  },
  computed: {
    ...mapGetters({
      menuToggle: 'menuToggle'
    })
  }
}
</script>