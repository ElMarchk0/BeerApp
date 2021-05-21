<template>
  <div class="welcome">
   <Welcome />
   
  </div>
  
  
  
</template>

<script>
import Welcome from '../components/Welcome'

import { beerApi } from '../hooks/beerApi.js'

export default {
  name: 'Home',
  components: {    
    Welcome,   
    
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
  .welcome{
    justify-content: center;
    margin: 2.5vmax;   
    z-index: 1;
  }
  
</style>
