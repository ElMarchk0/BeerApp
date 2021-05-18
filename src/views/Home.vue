<template>
  <div class="home">
    <Header :title="'The Great Victoria Beer '" />
    <Search :search="state.search" @search="handleSearch" />
    <div class="beers">
      <Beer v-for="beer in state.data" beer="beer" :key="beer.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Search from '../components/Search.vue'
import Beer from '../components/Beer.vue'
import { beerApi } from '../hooks/beerApi.js'

export default {
  name: 'Home',
  components: {
    Header,
    Search,
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
