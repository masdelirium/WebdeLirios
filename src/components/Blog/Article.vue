<template>

    <v-main style="padding:0;">
        <v-container fill-height fluid>

            <v-row align="center" justify="center"  style="display: block;position: absolute;width: 100%;z-index: 10;" >

                <v-main style="padding:0;position:fixed;top:100px;right:0;z-index: 12;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div>
                                    <div style="float:right;">
                                        <h2>Blog & Research</h2>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        <br/>
                                        +{{ article.Title }}
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>

            <v-row align="center" justify="center"  style="display: block;position: absolute;width: 100%;z-index: 10;" >
                <div>
                    <div class="uk-child-width-1-2" uk-grid>
                        <div class="uk-card uk-card-muted">
                            <div class="uk-card-body">
                                <VueShowdown v-if="!!article.Content" :markdown="article.Content"/>
                            </div>
                        </div>

                    </div>
                </div>

            </v-row>
        </v-container>
    </v-main>

</template>

<script>

import gql from "graphql-tag";

export default {
    name: 'Article',
    data() {
        return {
            skipQuery: true,
            article: []
        };
    },
    mounted() {
        console.log('  ---- Article mounted ---- ');
    },
    apollo: {
        article: {
            query: gql`
                query ($id:ObjectId!){
                  articles(query: { _id: $id }) {
                        Content
                        Title
                        _id 
                  }
                }
            `,
            variables(){
                return{
                    id:this.$route.params.articleid
                }
            },
            update: data => data.articles[0],
            result: function({ data }) {
                if (data) {
                    this.$store.commit('loading', false)
                }
            }
        }
    }
}

</script>

<style>
.uk-card-body img{
    width: 500px;
}
</style>