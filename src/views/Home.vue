<template>
  <div class="home">
   
      
      <div class="beers">
        <Beer v-for="beer in state.data" :beer="beer" :key="beer.id"/>
      </div>
        
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '../components/Header.vue'
// import Search from '../components/Search.vue'
import Beer from '../components/Beer.vue'

import { beerApi } from '../hooks/beerApi.js'
export default {
  name: 'Home',
  components: {
    // Header,
    // Search,
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

<style scoped>
  .header_search{
    background: rgb(170, 176, 238);
    justify-content: center;
    padding: 1rem;    
    z-index: 1;
  }
  .beers{
    margin-top: 10em;
  }
</style>
