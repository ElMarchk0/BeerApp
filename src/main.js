import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)



new Vue({
  router,

  // router,
  render: h => h(App)
}).$mount('#app');
