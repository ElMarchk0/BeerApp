<template>
  

    <div>
      <ul class="list-unstyled">
        <b-media tag="li" class="bg-color-red">
          <br>
          <h2 class="mt-0 mb-1 text-center">{{beer.name}}</h2>         
          <h4 class="mt-0 mb-1 text-center">{{beer.brand}}</h4>
          <p class="mb-0 mb-1 text-center">{{beer.description}}</p>
          <p class="mb-0 mb-1 text-center">ABV: {{beer.ABV}}</p>
          
        </b-media>
      </ul>
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

</style>