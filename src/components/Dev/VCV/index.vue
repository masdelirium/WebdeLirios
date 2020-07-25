<template>
    <v-main style="padding:0;">
        <v-container fill-height fluid>
            <v-row align="center" justify="center"  style="display: block;position: fixed;top:100px;width: 100%;z-index: 12;" >

                <v-main style="padding:0;float:right;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div style="float:right;">
                                    <div style="float:right;text-align: right;">
                                        <h2>VCV Rack</h2>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        <br/>
                                        <span>Custom Modules.</span>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

                <v-main style="padding:0;float: left;">
                    <v-container fill-height fluid>
                        <v-row align="center" justify="center">
                            <v-col @mouseleave="hover = 0">
                                <router-link class="v-toolbar__title" to="/vcv/PushMap">
                                    <span @mouseover="hover = 1">
                                        <v-icon>mdi-apps</v-icon>
                                        <span v-bind:style="hover == 1?'':'color:darkgray;'"> PushMap</span>
                                    </span>
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>

            <v-row align="center" justify="center"  style="display: block;width: 100%;z-index: 10;" >
        
                <v-main style="padding:0;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                            </v-col>
                            <v-col style="z-index: 11">
                                <RouterView>
                                </RouterView>
                            </v-col>
                            <v-col>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>
        </v-container>
    </v-main>

</template>
<script>
    export default {
        name: 'VCVModules',
        data(){
            return {
                hover:0
            }
        }
    }
</script>

<style>
    .img-thumbnail{
        height: 300px;
        width: 1400px;
        object-fit: cover;
        top: 0;
        left: 0;
        z-index: -100;
    }
</style>