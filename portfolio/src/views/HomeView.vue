<template>
  <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
  <NavBar />
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-img src="Profil_sans_fond.png" contain max-height="450"></v-img>
      </v-col>
      <v-col cols="6">
        <h5 class="red--text text-darken-4 top">Bonjour, je m'appelle Tristan</h5>
        <h1 class="white--text">Développeur Web</h1>
        <p class="grey--text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Adipisci explicabo, cupiditate necessitatibus iure hic omnis est ab
          <br />
          At nihil et temporibus ratione!
        </p>
        <br />
        <v-btn tile color="#A7121D" dark>à propos de moi</v-btn>
      </v-col>
      <v-col cols="12" class="padd">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child bgColor1">
                <v-icon color="#A7121D" icon="fa-solid fa-bars"></v-icon>
                <h3 class="white--text ml-3mt-4"><br />Développement Web</h3>
                <p class="grey--text ml-3 mt-6">
                  Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
                </p>
                <br />
                <v-btn color="#A7121D" dark text>
                  en apprendre plus
                  <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
                </v-btn>
              </div>
              <div class="child bgColor2">
                <v-icon icon="fa-solid fa-cart-shopping" x-large class="ml-3" dark></v-icon>
              </div>
            </v-col>
          </v-row>
        </div>
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

.top {
  margin-top: 180px;
}

.topInverse {
  margin-top: -250px;
}

.topTolbar {
  margin-top: 100px;
  text-align: center;
}

.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}

.second {
  width: 100%;
  height: 100%;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}

.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}

.child {
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}

.bgColor1 {
  background-color: #1e1e1e;
}

.bgColor2 {
  background-color: #ce1d2a;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}

.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}

.mRight {
  margin-right: 8px;
}

.mButton {
  margin-bottom: 8px;
}

.padding {
  padding: 8px 0px;
}

.col-12.padd {
  padding: 12px 0 !important;
}

.col-12.childcol {
  padding: 0 !important;
}

h1.number {
  font-size: 50px;
  font-weight: bold;
}

</style>
