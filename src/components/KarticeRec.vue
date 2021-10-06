<template>
  <v-card
    ><a :href="movie.link.url" target="_blank"
      ><v-img :src="movie.multimedia.src"
    /></a>
    <h2 class="text-center">{{ movie.headline }}</h2>
    <h3>Author: {{ movie.byline }}</h3>
    <h4>Publication date: {{ movie.publication_date }}</h4>
    <div class="Sadrzaj">Summary: {{ movie.summary_short }}</div>
  </v-card>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style>
.Sadrzaj {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>