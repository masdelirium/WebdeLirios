import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  options: {
    emoji: true
  }
})

export default VueShowdown;