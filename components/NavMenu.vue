<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="menu in menus" :key="menu.href">
        <nuxt-link :to="menu.route" custom #default="{ href, isExactActive }">
          <a :href="href" :class="{ 'active': isExactActive }" @click.prevent="visitLink(href)">
            {{ menu.title | uppercase }}
          </a>
        </nuxt-link>
      </li>
      <li key="logout" v-if="loggedIn">
        <a role="button" @click="logout">
          {{ 'Logout' | uppercase }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'nav-menu',
  computed: {
    menus() {
      return [
        { title: 'Jogs', route: this.loggedIn ? '/jogs' : '/' },
        { title: 'About', route: '/about' }
      ];
    }
  },
  methods: {
    ...mapActions({
      resetToken: 'auth/resetToken',
      resetJogsData: 'jogs/resetJogsData'
    }),
    visitLink(route) {
      this.$router.push(route, () => {
        this.$emit('close-menu');
      });
    },
    logout() {
      this.resetToken();
      this.resetJogsData();
      this.$router.push('/', () => {
        this.$emit('close-menu');
      });
    }
  }
}
</script>