<template>
  <div class="jogs-list__item">
    <div class="jogs-list__item-left">
      <svg-icon name="jog" />
    </div>
    <div class="jogs-list__item-right">
      <span>{{ jog.humanize_date }}
        <span>&nbsp;&nbsp;</span>
        <span class="white-space-nowrap">
          <nuxt-link :to="`/jogs/update/${jog.id}`">[Edit]</nuxt-link>
          <a role="button" class="text-red" @click="remove">[Delete]</a>
        </span>
      </span>
      <strong>Speed: <span>{{ jog.speed }}</span></strong>
      <strong>Distance: <span>{{ jog.distance }} km</span></strong>
      <strong>Time: <span>{{ jog.time }} min</span></strong>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'jogs-item',
  props: {
    jog: {}
  },
  data() {
    return {
      pending: false
    }
  },
  methods: {
    ...mapActions({
      deleteJog: 'jogs/deleteJog'
    }),

    async remove() {
      if (this.pending) return;
      this.pending = true;
      try {
        await this.deleteJog({
          jog_id: this.jog.id,
          user_id: this.jog.user_id
        });
        this.pending = false;
      } catch(error) {
        this.pending = false;
      }
    }
  }
}
</script>