<template>
  <main class="main main--content-centered">
    <div class="container">
      <h1 class="title">{{ title | uppercase }}</h1>
    </div>
  </main>
</template>

<script>
export default {
  name: 'layout-error',
  props: ['error'],
  head() {
    return this.$headMeta({
      title: this.title
    });
  },
  computed: {
    title() {
      if (this.error.statusCode == 404) {
        return '404 Page Not Found';
      } else {
        return 'System Error';
      }
    }
  }
}
</script>