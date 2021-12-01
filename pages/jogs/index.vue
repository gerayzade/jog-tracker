<template>
  <main :class="['main', { 'main--content-centered': !jogs.length }]">
    <div class="container">
      <jogs-list />
      <div class="btn-add" v-if="jogsTotal > 0">
        <nuxt-link to="/jogs/create" title="Create a jog">
          <svg-icon name="add" />
        </nuxt-link>
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
    if (!store.getters['jogs/jogsList'].length) {
      await store.dispatch('jogs/getJogsData');
    }
  },
  head() {
    return this.$headMeta({
      title: 'Jogs list'
    });
  },
  computed: {
    ...mapGetters({
      jogs: 'jogs/jogsList'
    })
  }
}
</script>