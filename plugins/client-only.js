import Vue from 'vue';

import Vuelidate from 'vuelidate';
import Inputmask from 'inputmask';

Vue.use(Vuelidate);

Vue.use({
  install(Vue) {
    Vue.directive('mask', {
      bind: function(el, binding) {
        if (!binding.value) return;
        Inputmask(binding.value).mask(el);
      }
    });
  }
});