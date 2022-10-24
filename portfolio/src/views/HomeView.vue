<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
    <NavBar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img class="img" src="Profil_sans_fond.png" contain max-height="400"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text--darken-4 top">Bonjour, je m'appelle Tristan David</h5>
          <br />
          <h1 class="white--text">Développeur Web</h1>
          <p class="grey--text">
            Très intéressée par le monde du numérique, je me suis reconverti <br />
            dans ce domaine grâce à une formation de Développeur Web chez Openclassrooms. <br />
            Je suis actuellemennt à la recherche d'un poste de développeur web proche de Nantes, Clisson ou La Roche sur
            Yon.
            <br />
          </p>
          <br />
          <v-btn tile color="#A7121D" dark>à propos de moi</v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#A7121D" icon="fa-solid fa-bars" x-large class="ml-3"></v-icon>
                  <h3 class="white--text ml-3 mt-4">Projets</h3>
                  <p class="grey--text ml-3 mt-6">
                    Ici, vous pourrez retrouver mes différents projets.
                  </p>
                  <v-btn color="#A7121D" dark text>
                    en apprendre plus
                    <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <v-icon color="#A7121D" icon="fa-solid fa-cart-shopping" x-large class="ml-3" dark></v-icon>
                  <h3 class="white--text ml-3 mt-4">Autres</h3>
                  <p class="grey--text ml-3 mt-6">
                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                    elit.
                  </p>
                  <v-btn color="#A7121D" dark text>
                    en apprendre plus
                    <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1">
                  <v-icon color="A7121D" icon="fa-solid fa-book" x-large class="ml-3"></v-icon>
                  <h3 class="white--text ml-3 mt-4">Blablabla</h3>
                  <p class="grey--text ml-3 mt-6">
                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.
                  </p>
                  <v-btn color="#A7121D" dark text>
                    en apprendre plus
                    <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" class="mt-10">
                <div class="child1">
                  <h1 class="red--text text--darken-4 mt-4 number">0</h1>
                  <h3 class="white--text mt-4">Années d'expérience</h3>
                </div>
                <div class="child2 mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">60+</h1>
                        <p class="grey--text">Clients</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">7+</h1>
                        <p class="grey--text">Projets complétés</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child2">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">08</h1>
                        <p class="grey--text">Blabla</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">10</h1>
                        <p class="grey--text">Réalisations</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="3" offset-md="3" id="about">
          <h4 class="white--text">AUTRES PROJETS</h4>
          <p class="grey--text">Lorem ipsum dolor Lorem ipsum dolor</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" dark> Voir tout </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="1.jpg" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="2.jpg" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="dark blue" dark text class="ml-n4"> OhmyFood </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            Visiter le site
            <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="dark blue" dark text class="ml-n4"> Groupomania </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            Visiter le site
            <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="3.jpg" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="4.jpg" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="dark blue" dark text class="ml-n4"> À venir </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            Visiter le site
            <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="dark blue" dark text class="ml-n4"> À venir </v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            Visiter le site
            <v-icon right icon="fa-solid fa-arrow-right"></v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">
                    Travaillons ensemble sur<br />votre prochain projet.
                  </h1>
                  <br />
                  <p class="grey--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius nesciunt ducimus natus <br />
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-btn tile color="#A7121D" dark class="mt-16">
                    Contact
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topTolbar" color="#111111" dark flat>
            <div style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              ">
              <v-btn text>Home</v-btn>
              <v-btn text>Projets</v-btn>
              <v-btn text>à propos</v-btn>
              <v-btn text>contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import FooterBar from "../components/FooterBar.vue"

export default {
  name: "HomeView",
  data: () => ({
    icons: ["fa-brands fa-linkedin"],
  }),
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style scoped>

.img {
  margin-top: 1em;
}

.top {
  margin-top: 120px;
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
  background: linear-gradient(to right,
      #181818,
      #181818 50%,
      #111111 50%,
      #111111 50%);
  text-align: center;
  padding: 2rem 2rem;
}

.second {
  width: 100%;
  height: 400px;
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
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 0.5em;
}

.child .grey--text {
  margin: 1em;
}

.bgColor1 {
  background-color: #1e1e1e;
}

.bgColor2 {
  background-color: #1e1e1e;
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
  padding: 8px 0;
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