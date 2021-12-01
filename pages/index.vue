<template>
  <main class="main main--content-centered">
    <div class="container">
      <login />
    </div>
  </main>
</template>

<script>
import Login from '~/components/Login';

export default {
  name: 'page-login',
  middleware: 'guest',
  components: {
    Login
  },
  head() {
    return this.$headMeta({
      title: 'Jog Tracker App'
    });
  }
}
</script>