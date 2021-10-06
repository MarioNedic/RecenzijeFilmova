<template>
  <v-app id="inspire">
    <v-app-bar app color="teal lighten-3" dark>

      <v-spacer></v-spacer>

            <v-row>
                <v-btn
                  v-for="link in links"
                  :key="link.text"
                  text
                  :to="link.path"
                >
                  <v-icon>mdi-circle-double </v-icon>
                  {{ link.text }}
                </v-btn>
            </v-row>
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
    group: null,
    links: [
      {
        text: "Izabrane recenzije",
        path: "/",
      },
      {
        text: "Pronadi Recenziju",
        path: "/pronadirecen",
      },
      {
        text: "Dodaj Recenziju",
        path: "/dodajrecen",
      },

    ],
  }),
};
</script>