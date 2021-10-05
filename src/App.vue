<template>
  <v-app id="inspire">
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Galerija</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-navigation-drawer app v-model="drawer" absolute temporary dark>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-row>
              <v-col cols="1">
                <v-btn
                  v-for="link in links"
                  :key="link.text"
                  text
                  :to="link.path"
                >
                  <v-icon>mdi-circle </v-icon>
                  {{ link.text }}
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    links: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "PretraziGaleriju",
        path: "/pretraziGaleriju",
      },
      {
        text: "Login",
        path: "/login",
      },

    ],
  }),
};
</script>