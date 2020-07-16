<template>
    <v-main style="padding:0;">
        <v-container fill-height fluid>

            <v-row align="center" justify="center" style="z-index: 11;">
                <v-col sm="1" style="font-size: small;text-align: right;">
                    Recorded using Tascam DR-40<br/>sounds come from Nord G1<br/> DSI Tetra<br/> MakeNoise 0-coast<br/> and KORG ER1.<br/>
                    Some effects are<br/>
                    EHX Memory Boy<br/>
                    Clouds.<br/>
                    Parasito <br/>
                    Planchas<br/>
                </v-col>
                <v-col sm="8">

                    <iframe width="1150" height="640" src="https://www.youtube.com/embed/iPq43S7RNHA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </v-col>
            </v-row>
        </v-container>
    </v-main>

</template>

<script>

export default {
    name: 'Home',
    mounted: function () {
        console.log('  ---- Home mounted ---- ');
        this.$store.commit('loading', false)
    }
};

</script>