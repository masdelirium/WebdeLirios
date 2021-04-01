<template>
  <v-app id="inspire">
    <loading :active="showLoadingModal" loader="dots" background-color="#fff" transition="fade"></loading>

    <v-app-bar
      app
      clipped-left
      clipped-right
      color="white"
      width="100%"
    >
      <div style="display:block;width:70%;margin:0 auto;">

        <router-link class="v-toolbar__title homelink" :style="{'margin-top': '2px','color': $route.path=='/'?'#76767652':'#76767200'}" to="/" >
            <img v-on:click="$route.path!='/'?$store.commit('loading', true):''" style="width: 80px;margin:0 10px" src="@/assets/delirios-logo.gif"/>
        </router-link>
        <div style="float:right;">

          <router-link class="v-toolbar__title" to="/music" >
            <v-btn style="margin:-1px 0 0 0;" v-on:click="$route.path!='/music'?$store.commit('loading', true):''" :style="$route.path=='/music'?{'background-color': '#ffffff','color':'#000000'}:{'background-color':'#272727','color':'#ffffff'}">
              Music
            </v-btn>
          </router-link>

          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" :style="($route.path=='/vcv' ||$route.path=='/max4live' || $route.path=='/midiScripts')?{'margin-top':'1px','background-color':'#ffffff','color':'#000000'}:{'margin-top':'1px','background-color':'#272727','color':'#ffffff'}">
                Dev
              </v-btn>
            </template>

            <!--v-btn>
              <router-link class="v-toolbar__title" to="/td">Touch Designer</router-link>
            </v-btn>
            <br/-->

            <router-link class="v-toolbar__title" to="/max4live">
              <v-btn v-on:click="$route.path!='/max4live'?$store.commit('loading', true):''" :style="($route.path=='/max4live')?{'background-color':'#ffffff','color':'#000000','width':'100%'}:{'background-color':'#272727','color':'#ffffff','width':'100%'}">
                Max 4 Live
              </v-btn>
            </router-link>
            <br/>
            <router-link class="v-toolbar__title" to="/midiScripts" >
              <v-btn v-on:click="$route.path!='/midiScripts'?$store.commit('loading', true):''" 
              :style="($route.path=='/midiScripts')?{'background-color':'#ffffff','color':'#000000','width':'100%'}:{'background-color':'#272727','color':'#ffffff','width':'100%'}">
                Live Midi Scripts
              </v-btn>
            </router-link>
            <br/>
            <router-link class="v-toolbar__title" to="/vcv" >
              <v-btn v-on:click="$route.path!='/vcv'?$store.commit('loading', true):''" :style="($route.path=='/vcv')?{'background-color':'#ffffff','color':'#000000','width':'100%'}:{'background-color':'#272727','color':'#ffffff','width':'100%'}">
                VCV Modules
              </v-btn>
            </router-link>

          </v-menu>

          <router-link class="v-toolbar__title" to="/blog">
            <v-btn style="margin:-1px 0 0 0;" v-on:click="$route.path!='/blog'?$store.commit('loading', true):''" :style="$route.path=='/blog'?{'background-color': '#ffffff','color':'#000000'}:{'background-color':'#272727','color':'#ffffff'}">
              Blog
            </v-btn>
          </router-link>

          <router-link class="v-toolbar__title" to="/downloads" >
            <v-btn style="margin:-1px 0 0 0;" v-on:click="$route.path!='/downloads'?$store.commit('loading', true):''" :style="$route.path=='/downloads'?{'background-color': '#ffffff','color':'#000000'}:{'background-color':'#272727','color':'#ffffff'}">
              Downloads
            </v-btn>
          </router-link>

        </div>

      </div>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          style="height: inherit;"
          align="center"
          justify="center"
        >

            <RouterView></RouterView>

        </v-row>
      </v-container>
    </v-main>


    <v-footer app style="background-color: transparent;z-index:1">
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div>
        <span style="color:#303030;background-color: white;">IG : masDelirium</span>
        <br/>
        <span style="color:#303030;background-color: white;">FB : masDelirium</span>
        <br/>
        <span style="color:#303030;background-color: white;">contacto.delirios@gmail.com</span>
        <br/>
        <span style="color:#303030;background-color: white;"><span class="copy-left">&copy;</span> 2020</span>
      </div>
      <v-spacer></v-spacer>
    </v-footer>

  </v-app>
</template>


<script>

import Loading from 'vue-loading-overlay';

export default {
  name: 'App',
  props: {
    source: String,
  },
  components:{
    'loading':Loading
  },
  data: () => ({
    info:null,
    loadData:[],
    drawer: false,
    isLoading: false
  }),
  methods: {
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  mounted() {

   console.log('  ---- App mounted ----  ');


  },
  computed:{
      showLoadingModal() {
          return this.$store.getters.showLoading;
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  overflow-y: auto !important;
}
header{
  z-index: 30 !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
.v-application--wrap{
  max-height:fit-content;
  overflow-y:scroll;
}
.uk-card-body{
  max-height: 600px;
}
.v-toolbar__title{
  text-decoration: none;
  color:white !important;
  font-size: 12px !important;
}
.copy-left { display: inline-block; text-align: right; margin: 0px; -moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); filter: FlipH; -ms-filter: “FlipH”; }
.p5Canvas{
  position: fixed;
  top:0;
  z-index: 0;
}
.v-content__wrap{
  z-index: 1;
}
.homelink{
    padding: 0 10px
}
</style>