<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          append-icon="mdi-magnify"
          filled
          label="Ime filma"
          placeholder="Barem 3 slova!"
          v-model="search"
          :loading="isLoading"
          clearable
          :rules="inputRules"
        ></v-text-field>
      </v-col>
      <v-col
        v-for="movie in izabraniMR"
        :key="movie.display_title"
        cols="12"
        md="4"
      >
<kartice-rec :movie="movie"></kartice-rec>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-pagination
          v-model="page"
          :length="totalReviews / 20"
          circle
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KarticeRec from '../components/KarticeRec.vue';
export default {
  components: { KarticeRec},
  data() {
    return {
      trazeniMR: [],
      search: "",
      isLoading: false,
      inputRules: [(v) => v.length >= 3 || "Barem 3 slova!"],
      page: 1,
      totalReviews: 1,
      perPage: 20,
    };
  },

  created() {
    this.getSearchedMR();
  },

  methods: {
    getSearchedMR() {
      let api = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
      this.axios
        .get(api, {
          params: {
            "api-key": "jxKec7QpLBSX5wG23WDGRM9XBAWcnAbD",
            offset: this.perPage * (this.page - 1),
            query: this.search,
          },
        })
        .then((response) => {
          this.izabraniMR = response.data.results;
          this.totalReviews = response.data.num_results;
          this.isLoading = false;
        });
    },
    fetchEntriesDebounced() {
      clearTimeout(this._searchTimerId);
      this._searchTimerId = setTimeout(() => {
        this.getSearchedMR();
      }, 750);
    },

    searchEntries() {
      this.animeSearched = [];
      this.page = 1;
      this.fetchEntriesDebounced();
    },

  },
  watch: {
    page: function () {
      this.getSearchedMR();
      window.scrollTo(0, 0);
    },
    search (val){
      if (!val){
        return
      }
      this.isLoading = true
      this.searchEntries()
    }
  },
};
</script>