<template>
  <div class="col d-flex justify-content-center" >
    <div class="beerCard">
      <div class="card" style="width: 25rem">
        <div class="card-body">
          <h3 class="card-title">{{ beer.name }}</h3>
          <h5 class="card-title">{{ beer.brand }}</h5>
          <h5 class="card-title">{{ beer.description }}</h5>
          <h5 class="card-title">{{ beer.ABV }}</h5>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: "BeerView",
  props: ["beerId",'beers'],

  data() {
    return {
      beer: {
        name: '',
        id: '',
        brand: '',
        ABV: '',
        description: ''
      },
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_BEER_API_URL).then((data) => {        
      const beers = data.data        
      this.beer = beers.filter((beer) => beer.id == this.$route.params.beerId)[0];      
      console.log(this.beer)
    })
  }  
};
</script>

<style scoped>
  .card {
    margin-top: 2em;
  }
</style>