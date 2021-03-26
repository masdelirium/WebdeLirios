<template>
    <v-main style="padding:0;">
        <v-container fill-height fluid>
            <v-row align="center" justify="center"  style="display: block;position: fixed;top:100px;width: 100%;z-index: 10;" >

                <v-main style="padding:0;float:right;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div style="float:right;">
                                    <div style="float:right;text-align: right;">
                                        <h2>MIDI Remote Scripts</h2>
                                        <h3>(aka Control Surface Scripts)</h3>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        <br/>
                                        <span>Python code mappíng Midi<br/>
                                        with The Live Object Model.</span>
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
                                <router-link class="v-toolbar__title" to="/midiScripts/APC40MK2">
                                    <span @mouseover="hover = 1">
                                        <v-icon>mdi-apps</v-icon>
                                        <span v-bind:style="hover == 1?'':'color:darkgray;'"> APC40MK2</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/midiScripts/Ubermap">
                                    <span @mouseover="hover = 2">
                                        <v-icon>mdi-attachment</v-icon>
                                        <span v-bind:style="hover == 2?'':'color:darkgray;'"> Ubermap</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/midiScripts/Push2">
                                    <span @mouseover="hover = 3">
                                        <v-icon style="transform: rotate(45deg);">mdi-arrow-expand-all</v-icon>
                                        <span v-bind:style="hover == 3?'':'color:darkgray;'"> Push2</span>
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
        name: 'MidiScripts',
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