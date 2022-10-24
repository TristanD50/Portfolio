<template>
  <v-app-bar app color="#202022" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#A7121D" icon="fa:fab fa-rebel"></v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('projets')">Projets</v-btn>
    <v-btn text @click="scroll('à propos')">à propos</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>

<style>

.v-btn__content {
  color: white;
}

</style>