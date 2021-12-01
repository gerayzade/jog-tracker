<template>
  <div class="jogs-list__item">
    <div class="jogs-list__item-left">
      <svg-icon name="jog" />
    </div>
    <div class="jogs-list__item-right">
      <span>{{ jog.humanize_date }} 
        <nuxt-link :to="`/jogs/update/${jog.id}`">[Edit]</nuxt-link>
      </span>
      <strong>Speed: <span>{{ jog.speed }}</span></strong>
      <strong>Distance: <span>{{ jog.distance }} km</span></strong>
      <strong>Time: <span>{{ jog.time }} min</span></strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jogs-item',
  props: {
    jog: {}
  }
}
</script>