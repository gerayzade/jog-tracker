<template>
  <main :class="['main', { 'main--content-centered': !jogs.length }]">
    <div class="container">
      <jogs-list />
      <div class="btn-add">
        <a role="button">
          <svg-icon name="add" />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import JogsList from '~/components/JogsList';

export default {
  name: 'page-jogs',
  middleware: 'auth',
  components: {
    JogsList
  },
  async asyncData({ store }) {
    await store.dispatch('jogs/getJogsData');
  },
  head() {
    return this.$headMeta({
      title: 'Jogs Data'
    });
  },
  computed: {
    ...mapGetters({
      jogs: 'jogs/jogsList'
    })
  }
}
</script>