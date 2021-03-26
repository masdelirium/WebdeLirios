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
                                        <h2>Music</h2>
                                    </div>
                                    <br/>
                                    <div style="float:right;width: 300px;text-align: right;">
                                        hosting experimental and wicked artists
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>

            </v-row>

            <v-row align="center" justify="center" style="z-index: 11;">
                <div class="music-main" @mouseover="hovermusic = 1" @mouseleave="hovermusic = false">
                    <div class="uk-child-width-1-2" uk-grid>
                        <div class="music-wrap">
                            <div :class="{ notselected: hovermusic != 1, selected: hovermusic == 1 }" class="music-thumbnail" :style="{ backgroundImage: `url(https://i.imgur.com/13zKLDx.png)` }">
                            </div>
                            
                            <div class="music-brief">
                                <span id="title" class="uk-text-large"><a target="_blank" href="https://soundcloud.com/barrilete_cosmico">Barrilete Cosmico</a></span>
                                <div class="uk-card uk-card-muted">
                                    <div class="uk-card-body">
                                        Space rock casero desde 2010<br/>
                                        Bateria: Fernando<br/>
                                        Guitarras: Nicolas + Gustavo<br/>
                                        Bajo: Matias<br/>
                                    </div>
                                </div>
                                    
                            </div>

                        </div>
                    </div>
                </div>

                <div class="music-main" @mouseover="hovermusic = 2" @mouseleave="hovermusic = false">
                    <div class="uk-child-width-1-2" uk-grid>
                        <div class="music-wrap">
                            <div :class="{ notselected: hovermusic != 2, selected: hovermusic == 2 }" class="music-thumbnail" :style="{ backgroundImage: `url(https://i.imgur.com/Gx9Ox5B.jpg)` }">
                            </div>

                            <div class="music-brief">
                                <span id="title" class="uk-text-large"><a target="_blank" href="https://soundcloud.com/dishnu">Dishnu</a></span>
                                <div class="uk-card uk-card-muted">
                                    <div class="uk-card-body">
                                        Dark psychedelic trance en colaboracion.
                                    </div>
                                </div>
                                    
                            </div>

                        </div>

                    </div>
                </div>

                <div class="music-main" @mouseover="hovermusic = 3" @mouseleave="hovermusic = false">
                    <div class="uk-child-width-1-2" uk-grid>
                        <div class="music-wrap">
                            <div :class="{ notselected: hovermusic != 3, selected: hovermusic == 3 }" class="music-thumbnail" :style="{ backgroundImage: `url(https://i.imgur.com/qbvxi48.png)` }">
                            </div>

                            <div class="music-brief">
                                <span id="title" class="uk-text-large"><a target="_blank" href="https://soundcloud.com/hachodelbruho">HachodelBruho</a></span>
                                <div class="uk-card uk-card-muted">
                                    <div class="uk-card-body">
                                        Experimentacion con sintetizadores hardware y desarrollo software.
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


export default {
    name: 'Music',
    mounted() {
        console.log('  ---- Music mounted ---- ');
        this.$store.commit('loading', false)
    },
    data() {
        return {
            hovermusic:false
        };
    }
}

</script>
<style>
    .music-main{
        margin-bottom: 20px;
        width: 1100px;
    }

    .music-wrap{
        display: inline-flex;
        position: relative;
        padding:30px;
        width: 100%;
        height: 200px;
    }

    .music-brief{
        text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;
        position: relative;
        z-index: 100;
        padding-left: 25px;
    }
    .music-brief a{
        color:white;
        font-size: x-large;
    }

    .music-date{
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
    }
    .music-thumbnail{
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
