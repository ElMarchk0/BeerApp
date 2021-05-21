<template>
  <div id="app">
    <Navbar 
      :search="state.search" 
      @search="handleSearch"
      
    /> 
    <div v-if="state.search === null">
      <router-view
      
      ></router-view>
    </div> 
    <div v-else>      
      <div class="beers">
        <Beer v-for="beer in state.data" :beer="beer" :key="beer.id"/>
      </div>
    </div> 
    
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import { beerApi } from './hooks/beerApi.js'
import Beer from './components/Beer.vue'


export default {
  components: {
    
    Navbar,
    Beer,
    
  },
  setup() {
    const state = beerApi()
      return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      }
    };
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
    
  
}

.beers{
    margin-top: 1em;
    padding-bottom: 1em
  }



</style>
