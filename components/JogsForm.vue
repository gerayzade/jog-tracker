<template>
  <form class="jogs-form" @submit.prevent="submit" novalidate>
    <nuxt-link to="/jogs" class="jogs-form__close">
      <svg-icon name="close" />
    </nuxt-link>
    <div class="jogs-form__inner">
      <div class="form-group">
        <label for="input-distance">Distance</label>
        <input :class="['text-input', { 'invalid': $v.form.distance.$error }]" type="number" id="input-distance"
          v-model.number="form.distance" />
      </div>
      <div class="form-group">
        <label for="input-time">Time</label>
        <input :class="['text-input', { 'invalid': $v.form.time.$error }]" type="number" id="input-time"
          v-model.number="form.time" />
      </div>
      <div class="form-group">
        <label for="input-date">Date</label>
        <input :class="['text-input', { 'invalid': $v.form.date.$error }]" type="text" id="input-date" 
          v-mask="{ alias: 'datetime', inputFormat: 'dd/mm/yyyy', placeholder: 'DD/MM/YYYY' }"
          v-model="form.date" />
      </div>
      <div class="form-group">
        <button type="submit" :class="['btn btn--white', { pending }]">
          {{ pending ? 'Loading...' : 'Save' }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

import { required, numeric } from 'vuelidate/lib/validators';

const isDate = (value) => {
  return value.match(/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/) !== null;
}

export default {
  props: {
    operation: {
      type: String,
      default: 'create',
      validator(value) {
        return ['create', 'update'].indexOf(value) !== -1;
      }
    }
  },
  validations: {
    form: {
      distance: { required, numeric },
      time: { required, numeric },
      date: { required, isDate }
    }
  },
  data() {
    return {
      pending: false,
      form: {
        distance: '',
        time: '',
        date: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addNewJog: 'jogs/addNewJog'
    }),

    async submit() {
      this.$v.$touch();
      if (this.$v.$error || this.pending) return;
      this.pending = true;
      try {
        await this.addNewJog(this.form);
        this.pending = false;
        this.$router.push('/jogs');
      } catch(error) {
        this.pending = false;
      }
    }
  }
}
</script>