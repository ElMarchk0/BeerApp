<template>
    <div 
      class="beer"
      >
        <h3>
          {{beer.name}} 
        </h3>
        <br>
        <h4>{{beer.brand}}</h4>
        <h4>{{beer.description}}</h4>
    </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'Beer',
  props: ['beer'],
  setup({ beer }) {
    const beers =  computed(() => beer.name)
    return beers
  }
  
}
</script>

<style scoped>
  .card {
    background: #f4f4f4;
    place-content: center;
    padding: 0em 1em 1em 1em;
    width: 18rem;
    display: flex;
    float: none;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 10px 20px;
}
</style>