<template>
    <v-main style="padding:0;">
        <v-container fill-height fluid>
            <v-row align="center" justify="center"  style="display: block;width: 100%;" >

                <v-main style="padding:0;position:fixed;top:100px;right:0;z-index: 12;">
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col>
                                <div>
                                    <div style="float:right;">
                                        <h2>Max 4 Live</h2>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        <br/>
                                        <span>Explore estos instrumentos,
                                        <br/>
                                         efectos y 
                                        <br/>
                                     utilidades.</span>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

                <v-main style="padding:0;position:fixed;top:100px;left:0;z-index: 12;">
                    <v-container fill-height fluid>
                        <v-row align="center" justify="center">
                            <v-col @mouseleave="hover = 0">
                                <router-link class="v-toolbar__title" to="/max4live/parasitos">
                                    <span @mouseover="hover = '/max4live/parasitos'" @click="deviceSelected = '/max4live/parasitos'">
                                        <v-icon>mdi-bacteria</v-icon>
                                        <span v-bind:style="(hover == '/max4live/parasitos' || deviceSelected == '/max4live/parasitos')?'':'color:darkgray;'"> Parasitos</span>
                                        <br v-if="(hover == '/max4live/parasitos' || deviceSelected == '/max4live/parasitos')"/>
                                        <span v-if="(hover == '/max4live/parasitos' || deviceSelected == '/max4live/parasitos')">Reverb portado desde el hack Parasites de Clouds</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/max4live/planchas">
                                    <span @mouseover="hover = '/max4live/planchas'" @click="deviceSelected = '/max4live/planchas'">
                                        <v-icon>mdi-atom</v-icon>
                                        <span v-bind:style="(hover == '/max4live/planchas' || deviceSelected == '/max4live/planchas')?'':'color:darkgray;'"> Planchas</span>
                                        <br v-if="(hover == '/max4live/planchas' || deviceSelected == '/max4live/planchas')"/>
                                        <span v-if="(hover == '/max4live/planchas' || deviceSelected == '/max4live/planchas')">Reverb Valley Audio's Plateau portado de VCV</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/max4live/argollas">
                                    <span @mouseover="hover = '/max4live/argollas'" @click="deviceSelected = '/max4live/argollas'">
                                        <v-icon>mdi-atom-variant</v-icon>
                                        <span v-bind:style="(hover == '/max4live/argollas' || deviceSelected == '/max4live/argollas')?'':'color:darkgray;'"> Argollas</span>
                                        <br v-if="(hover == '/max4live/argollas' || deviceSelected == '/max4live/argollas')"/>
                                        <span v-if="(hover == '/max4live/argollas' || deviceSelected == '/max4live/argollas')">Resonator portado de MI</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/max4live/bolitas">
                                    <span @mouseover="hover = '/max4live/bolitas'" @click="deviceSelected = '/max4live/bolitas'">
                                        <v-icon>mdi-adjust</v-icon>
                                        <span v-bind:style="(hover == '/max4live/bolitas' || deviceSelected == '/max4live/bolitas')?'':'color:darkgray;'"> Bolitas</span>
                                        <br v-if="(hover == '/max4live/bolitas' || deviceSelected == '/max4live/bolitas')"/>
                                        <span v-if="(hover == '/max4live/bolitas' || deviceSelected == '/max4live/bolitas')">Random Generator portado de MI</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/max4live/rulos">
                                    <span @mouseover="hover = '/max4live/rulos'" @click="deviceSelected = '/max4live/rulos'">
                                        <v-icon>mdi-all-inclusive</v-icon>
                                        <span v-bind:style="(hover == '/max4live/rulos' || deviceSelected == '/max4live/rulos')?'':'color:darkgray;'"> Rulos</span>
                                        <br v-if="(hover == '/max4live/rulos' || deviceSelected == '/max4live/rulos')"/>
                                        <span v-if="(hover == '/max4live/rulos' || deviceSelected == '/max4live/rulos')">Macro Oscillator portado de MI</span>
                                    </span>
                                </router-link>
                                <br/>
                                <br/>
                                <router-link class="v-toolbar__title" to="/max4live/midiUtil">
                                    <span @mouseover="hover = '/max4live/midiUtil'" @click="deviceSelected = '/max4live/midiUtil'">
                                        <v-icon>mdi-border-outside</v-icon>
                                        <span v-bind:style="(hover == '/max4live/midiUtil' || deviceSelected == '/max4live/midiUtil')?'':'color:darkgray;'"> Midi Util</span>
                                        <br v-if="(hover == '/max4live/midiUtil' || deviceSelected == '/max4live/midiUtil')"/>
                                        <span v-if="(hover == '/max4live/midiUtil' || deviceSelected == '/max4live/midiUtil')">Filtros midi + Random bypass</span>
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
                            <v-col class="main-content">
                                <RouterView></RouterView>
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
        name: 'Max4Live',
        mounted: function () {
            console.log('  ---- Max4Live mounted ---- ');
            this.$store.commit('loading', false)
        },
        data(){
            return {
                hover:0,
                deviceSelected:0
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.$store.commit('loading', false)
            if (to.path == '/max4live') {
               this.deviceSelected=0; 
            }
            next();
        }
    }
</script>

<style>
.main-content p, .main-content ol{
    font-size: 12px;
}
</style>