<template>
  <main class="main main--content-centered">
    <div class="container">
      <jogs-form :jog-id="Number($route.params.id)" />
    </div>
  </main>
</template>

<script>
import JogsForm from '~/components/JogsForm';

export default {
  name: 'page-jogs-update',
  middleware: 'auth',
  components: {
    JogsForm
  },
  async asyncData({ store }) {
    if (!store.getters['jogs/jogsList'].length) {
      await store.dispatch('jogs/getJogsData');
    }
  },
  head() {
    return this.$headMeta({
      title: 'Update yout jog'
    });
  }
}
</script>