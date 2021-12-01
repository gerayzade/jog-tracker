import Vue from 'vue';

import Vuelidate from 'vuelidate';

import { GlobalMixin } from '~/mixins/global';

Vue.use(Vuelidate);

Vue.use({
  install(Vue) {
    Vue.mixin(GlobalMixin);
  }
});