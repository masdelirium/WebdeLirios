import Vue from 'vue';
import store from './plugins/vuex';

import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import apolloProvider from "./plugins/apolloClient";
import showdown from './plugins/showdown';
import loading from './plugins/loadingOverlay';
import moment from './plugins/moment';
import codemirror from './plugins/codemirror';

Vue.mixin({
    methods:{
        open:function(url){
            window.open(url, '_blank');
        }
    }
})

new Vue({
    router,
    vuetify,
    apolloProvider,
    showdown,
    moment,
    loading,
    codemirror,
    store,
    render: h => h(App)
}).$mount('#app')