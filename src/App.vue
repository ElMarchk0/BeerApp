<template>
  <div class="home">
    <Header :title="'The Great Victoria Beer Api'" />
    <Search :search="state.search" @search="handleSearch" />
    <div class="beers">
      <Beer v-for="data in state.beer" beer="beer" :key="data.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Beer from './components/Beer.vue'
import { beerApi } from './hooks/beerApi.js'

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
