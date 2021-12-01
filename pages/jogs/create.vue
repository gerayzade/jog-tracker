<template>
  <main class="main main--content-centered">
    <div class="container">
      <jogs-form />
    </div>
  </main>
</template>

<script>
import JogsForm from '~/components/JogsForm';

export default {
  name: 'page-jogs-create',
  middleware: 'auth',
  components: {
    JogsForm
  }
}
</script>