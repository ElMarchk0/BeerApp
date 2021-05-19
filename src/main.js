import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import VueRouter from 'vue-router'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app');
