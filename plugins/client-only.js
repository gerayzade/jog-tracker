import Vue from 'vue';

import Inputmask from 'inputmask';

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