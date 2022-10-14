<template>
  <v-app: style="{ background: $vuetify.theme.themes.dark.background}">
    <NavBar />
  </v-app:>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: 'HomeView',

  components: {
    NavBar,
  },
};
</script>
