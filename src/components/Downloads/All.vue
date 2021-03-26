<template>
    <v-main style="padding:0;">
        <v-container fill-height fluid>
            <v-row align="center" justify="center"  style="display: block;position: absolute;width: 100%;z-index: 10;" >
                <v-main style="padding:0;position:fixed;top:100px;right:0;z-index: 12;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div>
                                    <div style="float:right;text-align: right;">
                                        <h2>Downloads</h2>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>
            </v-row>
            
            <v-row align="center" justify="center" style="z-index: 11;">
                <v-col sm="2"></v-col>
                <v-col sm="8">

                    <div class="main-content">
                        <div class="uk-child-width-1-2" uk-grid>
                          <div v-for="link in DownloadLinks" :key="link._id">
                            <p id="title" class="uk-text-large">
                                <span style="color:rgb(109, 109, 109);">{{link.createdAt  | moment("DD.MM.YYYY") }}</span> - {{ link.Name }} : {{ link.Details }} <a target="_blank" :href="link.URL" style="text-decoration: none;"><v-icon>mdi-link</v-icon></a>
                            </p>

                          </div>

                        </div>
                    </div>

                </v-col>
                <v-col sm="2"></v-col>
            </v-row>

        </v-container>
    </v-main>

</template>


<script>

import gql from "graphql-tag";

export default {
    name: 'AllDownloads',
    data() {
        return {
          links: []
        };
    },
    computed: {
        DownloadLinks() {
            return this.links.slice().sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        }
    },
    apollo: {
        links:{
            query:gql`
                query getMyLinks {
                  links {
                        Details
                        URL
                        Name
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
        }
    }
}

</script>

<style>
.main-content{
    font-size: 12px;
}
</style>