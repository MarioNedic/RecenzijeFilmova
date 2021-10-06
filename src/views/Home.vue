<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="movie in izabraniMR"
        :key="movie.display_title"
        cols="12"
        md="4"
      >
      <kartice-rec :movie="movie"></kartice-rec>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KarticeRec from '../components/KarticeRec.vue';
export default {
  components: {KarticeRec },
  name: "Home",
  data() {
    return {
      izabraniMR: [],
    };
  },

  created() {
    this.getPickMR();
  },

  methods: {
    getPickMR() {
      let api = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json";
      this.axios
        .get(api, {
          params: {
            "api-key": "jxKec7QpLBSX5wG23WDGRM9XBAWcnAbD",
          },
        })
        .then((response) => {
          this.izabraniMR = response.data.results;
        });
    },
  },
};
</script>