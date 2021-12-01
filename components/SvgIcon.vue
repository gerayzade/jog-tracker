<template>
  <svg class="svg-icon">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      validator(value) {
        return ['bear', 'bear-face', 'add', 'close', 'menu', 'logo', 'jog', 'oops', 'filter'].indexOf(value) !== -1;
      }
    }
  }
}
</script>