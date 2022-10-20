<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
  <NavBar />
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-img src="Funy_Skull.jpg" contain max-height="500"></v-img>
        <h1 class="white--text">Développeur Web</h1>
        <p class="grey--text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Adipisci explicabo, cupiditate necessitatibus iure hic omnis est ab
          <br />
          At nihil et temporibus ratione!
        </p>
      </v-col>
      <v-col cols="6">
        <h5 class="red--text text-darken-4 top">Hello, je m'appelle Tristan</h5>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'HomeView',

  components: {
    NavBar,
  },
}
</script>

<style scoped>

</style>
