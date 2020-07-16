import Vue from 'vue';
import store from './plugins/vuex';

import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import apolloProvider from "./plugins/apolloClient";
import showdown from './plugins/showdown';
import loading from './plugins/loadingOverlay';
import moment from './plugins/moment';

new Vue({
    router,
    vuetify,
    apolloProvider,
    showdown,
    moment,
    loading,
    store,
    render: h => h(App)
}).$mount('#app')