import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
// import VueRouter from 'vue-router'
// import router from './router'

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
// Vue.use(VueRouter)

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app');
