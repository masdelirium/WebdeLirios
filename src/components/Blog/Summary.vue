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
                                        +Programacion<br/>
                                        +Musica<br/>
                                        +Diseño
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>

            <v-row align="center" justify="center" style="z-index: 11;">

                <div class="article-main" v-for="onearticle in leftArticles" :key="onearticle._id">
                    <div class="uk-child-width-1-2" uk-grid>
                      <div class="article-wrap" @mouseover="hoverArticle = onearticle._id" @mouseleave="hoverArticle = false">
                        <div :class="{ notselected: hoverArticle != onearticle._id, selected: hoverArticle == onearticle._id }" class="article-thumbnail" :style="{ backgroundImage: `url(${onearticle.ImageHeader})` }">
                        </div>
                        <div class="article-date"> {{onearticle.createdAt  | moment("DD.MM.YYYY") }} </div>


                        <div class="article-brief">
                            <span id="title" class="uk-text-large">{{ onearticle.Title }}</span>
                            <!--router-link
                                :to="{ path: '/article/' + onearticle._id }"
                                class="uk-link-reset"
                            >
                                <span v-on:click="$store.commit('loading', true)" id="title" class="uk-text-large">{{ onearticle.Title }}</span>
                            </router-link-->
                            <div class="uk-card uk-card-muted">
                                <div class="uk-card-body">
                                    <p> {{onearticle.Content.split('\n')[0] }} <p/>
                                </div>
                            </div>
                                
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
    name: 'Summary',
    mounted() {
        console.log('  ---- Summary mounted ---- ');
    },
    data() {
        return {
          articles: [],
          hoverArticle:false
        };
    },
    apollo: {
        articles: {
            query: gql`
                query lastArticles{
                  articles(
                  limit: 4,
                  sortBy: CREATEDAT_DESC
                  ) {
                        ImageHeader
                        Content
                        Title
                        createdAt
                        _id
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
    methods:{
    }
}

</script>
<style>
    .article-main{
        margin-bottom: 20px;
        width: 1100px;
    }

    .article-wrap{
        display: inline-flex;
        position: relative;
        padding:30px;
        width: 100%;
        height: 200px;
    }

    .article-brief{
        text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;
        position: relative;
        z-index: 100;
        padding-left: 25px;
    }
    .article-brief a{
        color:white;
        font-size: x-large;
    }

    .article-date{
        width: 90px;
        left: 0;
        bottom: 0;
        margin-bottom: 65px;
        background-color: gray;
    }
    .selected{
        transition: 0.5s;
        filter: blur(0px);
    }
    .notselected{
        transition: 0.5s;
        filter: blur(5px);
        -moz-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
        -o-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
        -webkit-filter: grayscale(100%);
        filter: gray;
    }
    .article-thumbnail{
        background-repeat: repeat-x;
        height: 100%;
        width: 1100px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
    }

</style>