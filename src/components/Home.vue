<template>
    <v-main style="padding:0;z-index:1">
        <v-container v-for="onearticle in leftArticles" :key="onearticle._id" fill-height fluid v-html="onearticle.Content">


        </v-container>
    </v-main>

</template>

<script>

import gql from "graphql-tag";

export default {
    name: 'Home',
    mounted: function () {
        console.log('  ---- Home mounted ----  ');
    },
    data() {
        return {
          articles: [],
        };
    },
    apollo: {
        articles: {
            query: gql`
                query home{
                  articles(
                  query: { Title: "Home" },
                  limit: 1
                  ) {
                        Content
                  }
                }
            `,
            result: function({ data }) {
                if (data) {
                    this.$store.commit('loading', false)
                }
            }
        },
    },
    computed: {
        leftArticlesCount() {
            return Math.ceil(this.articles.length);
        },
        leftArticles() {
            return this.articles.slice(0, this.leftArticlesCount);
        },
    },
};

</script>