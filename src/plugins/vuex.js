import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

console.log('  ---- Using Vuex ---- ');

export default new Vuex.Store({
  state() {
    return {showLoading: true}
  },
  getters:{
    showLoading: state => {
      return state.showLoading
    }
  },
  mutations: {
    loading : (state, val) => {
        if (!val) {
          setTimeout(() => state.showLoading = false, 1000);
        }else{
          state.showLoading = true;
        }
    }
  },
  actions: {
  }
})