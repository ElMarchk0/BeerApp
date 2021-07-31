import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BeerView from '@/views/BeerView.vue';
import Beers from '@/views/Beers.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/beer/:beerId',
    name: 'BeerView',
    component: BeerView,
    props: true
  },
  {
    path: '/beers?=:search',
    name: 'Beers',
    component: Beers,
    props: true
  }

]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
 
})

export default router

