import Vue from 'vue';

import { GlobalMixin } from '~/mixins/global';

Vue.use({
  install(Vue) {
    Vue.mixin(GlobalMixin);
  }
});