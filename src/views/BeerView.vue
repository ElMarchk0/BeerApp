<template>
  <div>
    <div class="card" style="width: 25rem">
    
    </div>
    <div class="card-body">
      <h3 class="card-title">{{beer.id}}</h3>
      <h5 class="card-title">{{beer.name}}</h5>
      Test
    </div>
    
  </div>
</template>

<script>
import {singleBeer} from '../hooks/beerApi.js'

export default {
  setup() {
    const state = singleBeer()
      return {
      state
    };
  }
}


</script>