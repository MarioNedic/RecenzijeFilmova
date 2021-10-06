<template>
        <v-card
          >
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
