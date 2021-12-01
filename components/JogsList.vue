<template>
  <div class="jogs-list">
    <div class="jogs-list__item" v-for="jog in jogsDisplayed" :key="jog.id">
      <div class="jogs-list__item-left">
        <svg-icon name="jog" />
      </div>
      <div class="jogs-list__item-right">
        <span>{{ jog.humanize_date }}</span>
        <strong>Speed: <span>{{ jog.speed }}</span></strong>
        <strong>Distance: <span>{{ jog.distance }} km</span></strong>
        <strong>Time: <span>{{ jog.time }} min</span></strong>
      </div>
    </div>
    <div class="jogs-list__empty" v-if="!jogs.length">
      <svg-icon name="oops" />
      <p>Nothing is there</p>
      <nuxt-link to="/jogs/create" class="btn">
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

export default {
  name: 'jogs-list',
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