<template>

    <v-main class="ArticleMain" style="padding:0;">
        <v-container fill-height fluid>

            <v-row class="ArticleRow" align="center" justify="center"  style="display: block;position: absolute;width: 100%;z-index: 10;" >

                <v-main style="padding:0;position:fixed;top:100px;right:0;z-index: 12;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div>
                                    <div style="float:right;text-align: right;">
                                        <h2>Blog & Research</h2>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        <br/>
                                        +{{ article.Title }}
                                        <br/>
                                        {{article.createdAt  | moment("DD.MM.YYYY") }}
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>

            <v-row class="ArticleRow" align="center" justify="center"  style="display: block;position: absolute;width: 100%;z-index: 10;" >
                <div>
                    <div class="uk-child-width-1-2" uk-grid>
                        <div class="uk-card uk-card-muted">
                            <div class="uk-card-body">

                                <VueShowdown :markdown="showArticle"/>

                            </div>
                        </div>

                    </div>
                </div>

            </v-row>
        </v-container>
    </v-main>


</template>

<script>

import gql from "graphql-tag"

import CodeMirror from 'codemirror'

export default {
    name: 'Article',
    data() {
        return {
            skipQuery: true,
            article: {},
            toggler: false
        };
    },
    mounted() {
        console.log('  ---- Article mounted ----  ');
    },
    watch:{
        article: function(){
            if(typeof this.article.Content !== "undefined"){

                setTimeout(
                    ()=>{
                        Array.from(document.getElementsByTagName("code")).forEach(
                            function(e){
                                var innerHTML = e.innerHTML;
                                e.innerHTML = "";
                                CodeMirror(e,{
                                  value: innerHTML,
                                  mode:  "javascript",
                                  theme: 'mbo',
                                  lineNumbers: true,
                                  readOnly:true
                                });
                            }
                        );

                        /*Array.from(document.getElementsByTagName("img")).forEach(
                            function(e){
                                e.addEventListener("mouseup", e => {
                                    fancyBox(e.target,[]);
                                })
                            }
                        );*/

                    },
                    100
                );

            }
        }
    },
    computed: {
        showArticle() {
            if(typeof this.article.Content !== "undefined"){

                /*var contentHigh = this.article.Content.substring(this.article.Content.indexOf("```") + 3,this.article.Content.indexOf("```") + this.article.Content.substring(this.article.Content.indexOf("```")+3).indexOf("```"));*/
                var contentHigh = this.article.Content;


                /*while(this.article.Content.indexOf("```")){

                    contentHigh = this.article.Content.substring(this.article.Content.indexOf("```"),this.article.Content.indexOf("```") + this.article.Content.substring(this.article.Content.indexOf("```")+3).indexOf("```") + 6);

                    this.article.Content = this.article.Content.substring(0, this.article.Content.indexOf("```")) + prism.highlight(contentHigh, prism.languages.bash) + this.article.Content.substring(this.article.Content.indexOf("```") + this.article.Content.substring(this.article.Content.indexOf("```")+3).indexOf("```") + 6);

                }*/

                //var contentHigh = "import pydevd pydevd.settrace('localhost', port=int(5432), stdoutToServer=True, stderrToServer=True)";
                return contentHigh;

            }
            /*return prism.highlight("import pydevd pydevd.settrace('localhost', port=int(5432), stdoutToServer=True, stderrToServer=True)", prism.languages.bash);*/
            return '';
        }
    },
    apollo: {
        article: {
            query: gql`
                query ($id:ObjectId!){
                  articles(query: { _id: $id }) {
                        Content
                        Title
                        createdAt
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
    width: 800px;
}

.ArticleMain code {
    background-color:inherit;
}

.CodeMirror{
    height:auto;
}
.ArticleMain{
    margin-top: -50px;
    max-width: 900px;
}

.ArticleMain p{
text-align: justify;
}

.ArticleRow{
    display:flex;
    margin-right: inherit;
    margin-left: -200px;
}
</style>