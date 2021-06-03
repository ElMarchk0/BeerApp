import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BeerView from '@/views/BeerView.vue';
import Beer from '@/components/Beers.vue';

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
    path: '/beers',
    name: 'Beers',
    component: Beer,
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

