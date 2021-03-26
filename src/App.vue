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


    <v-footer app style="background-color: transparent;z-index: 20">
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

import P5 from 'p5';

let xspacing = 8; // Distance between each horizontal location
let w; // Width of entire wave
let maxwaves = 4; // total # of waves to add together

let theta = 0.0;
let amplitude = new Array(maxwaves); // Height of wave
// Value for incrementing X, to be calculated
// as a function of period and xspacing
let dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
let yvalues;

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

   const script = function (p5) {    
    
    // NOTE: Set up is here   
    p5.setup = _ => {  
      p5.frameRate(30);
      p5.createCanvas(p5.windowWidth, p5.windowHeight );
      p5.colorMode(p5.RGB, 255, 255, 255, 100);
      p5.setupWave();

      return _;  
    }     
    // NOTE: Draw is here
    p5.draw = _ => {      
     p5.background('#272727');

     p5.calcWave();
     p5.renderWave();
     
     return _;  
    }

    p5.windowResized = _ => { 
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight );
      p5.setupWave();

      return _;
    } 

    p5.calcWave = _ => {
      // Increment theta (try different values
      // for 'angular velocity' here
      theta += 0.02;

      // Set all height values to zero
      for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = 0;
      }

      // Accumulate wave height values
      for (let j = 0; j < maxwaves; j++) {
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
          // Every other wave is cosine instead of sine
          if (j % 2 == 0) yvalues[i] += p5.sin(x) * amplitude[j];
          else yvalues[i] += p5.cos(x) * amplitude[j];
          x += dx[j];
        }
      }
      return _;
    }

    p5.setupWave = _ => {
      w = p5.width + 16;

      for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = p5.random(10, 30);
        let period = p5.random(0, 100); // Num pixels before wave repeats
        dx[i] = (p5.TWO_PI / period) * xspacing;
      }

      yvalues = new Array(p5.floor(w / xspacing));
      return _;
    }

    p5.renderWave = _ => {
      // A simple way to draw the wave with an ellipse at each location
      p5.noStroke();

      p5.ellipseMode(p5.CENTER);
      for (let x = 0; x < yvalues.length; x++) {
        p5.fill('#101010');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x], 4, 4);
        p5.fill('#202020');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 150, 3.5, 3.5);
        p5.fill('#303030');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 300, 3, 3);
        p5.fill('#404040');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 450, 2.5, 2.5);
        p5.fill('#505050');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 600, 2, 2);
        p5.fill('#707070');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 750, 1.5, 1.5);
        p5.fill('#808080');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 900, 1, 1);
        p5.fill('#909090');
        p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x] - 1050, 0.5, 0.5);
      }
      return _;
    }

   }

   // NOTE: Use p5 as an instance mode
   new P5(script)

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