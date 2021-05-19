<template>
  
  <form class="search">
    <input
      type="text"
      :value="beerQuery"
      @keyup="handleChange"
    />
    <input @click="handleSubmit" type="submit" value="Search" />
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Search',
  props: ['search'],
  setup({ search }, {emit}) {
    const beerQuery = ref(search)

    return {
      beerQuery,
      handleSubmit(event) {
        event.preventDefault()
        emit('search', beerQuery.value)
        console.log(beerQuery.value)
      },
      handleChange(event) {
        beerQuery.value = event.target.value
        
      }
    }
    
    
  },
  
}
</script>

<style scoped>
  .search {
    display: flex;
    justify-content: center;
    margin: 2.5rem;
    
  }
</style>