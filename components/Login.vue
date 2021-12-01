<template>
  <div class="login">
    <svg-icon class="login__icon" name="bear-face" />
    <button :class="['btn', { pending }]" @click="login">
      {{ pending ? 'Loading...' : 'Let me in' }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      pending: false
    }
  },
  methods: {
    ...mapActions({
      getToken: 'auth/getToken',
      checkToken: 'auth/checkToken'
    }),
    async login() {
      if (this.pending) return;
      this.pending = true;
      try {
        await this.getToken();
        this.$router.push('/jogs', () => {
          this.pending = false;
        });
      } catch(error) {
        this.pending = false;
      }
    }
  },
  async beforeMount() {
    this.pending = true;
    try {
      await this.checkToken();
      this.$nextTick(() => {
        if (this.loggedIn) {
          let redirectPath = this.$cookies.get('redirect_path') || '/jogs';
          this.$router.push(redirectPath, () => {
            this.pending = false;
          });
        } else {
          this.pending = false;
        }
      });
    } catch(error) {
      this.pending = false;
    }
  }
}
</script>