<template>
          <v-card
          ><a :href="movie.link.url" target="_blank"
            ><v-img :src="movie.multimedia.src"
          /></a>
          <h2>{{ movie.headline }}</h2>
          <h3>Author: {{ movie.byline }}</h3>
          <h4>Publication date: {{ movie.publication_date }}</h4>
          Summary: {{ movie.summary_short }}
        </v-card>
</template>

<script>
export default {
    props:["movie"],
}
</script>
