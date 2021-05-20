<template>
  <div id="app">
    <Navbar 
      :search="state.search" 
      @search="handleSearch"
    />
         
      <div class="beers">
        <Beer v-for="beer in state.data" :beer="beer" :key="beer.id"/>
      </div>
    <router-view />
    
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import { beerApi } from './hooks/beerApi.js'
import Beer from './components/Beer.vue'

export default {
  components: {
    
    Navbar,
    Beer
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
                   
  bottom:0;                         
   
  justify-content: center;
  margin: auto;
}

</style>
