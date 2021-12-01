<template>
  <div class="jogs-list">
    <jogs-item :jog="jog" v-for="jog in jogsDisplayed" :key="jog.id" />
    <div class="jogs-list__empty" v-if="!jogsFiltered">
      <svg-icon name="oops" />
      <p>Nothing is there</p>
      <nuxt-link to="/jogs/create" class="btn" v-if="!jogsTotal">
        Create your jog first
      </nuxt-link>
    </div>
    <div class="btn-wrap" v-if="jogs.length > showCount">
      <button class="btn btn--green" @click="showCount += limit">
        Show more
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import JogsItem from '~/components/JogsItem';

export default {
  name: 'jogs-list',
  components: { 
    JogsItem
  },
  props: {
    limit: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      showCount: this.limit
    }
  },
  computed: {
    ...mapGetters({
      jogs: 'jogs/jogsList'
    }),
    jogsDisplayed() {
      return this.jogs.slice(0, this.showCount);
    }
  },
  methods: {
    ...mapActions({
      getJogsData: 'jogs/getJogsData'
    })
  }
}
</script>