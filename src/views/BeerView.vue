<template>
  <div class="container-sm">
    <div class="mx-auto w-50 d-inline-block w-responsive" :adaptive="true" :resizable="true" >
      <div class="beerCard">
        <div class="card" >
          <div class="card-body">
            <h3 class="card-title">{{ beer.name }}</h3>
            <h5 class="card-title">{{ beer.brand }}</h5>
            <h5 class="card-title">{{ beer.description }}</h5>
            <h5 class="card-title">ABV: {{ beer.ABV }}</h5>
            
          </div>
        </div>
        <div class="review">
          <Review />        
        </div>
        
      </div>    
    </div>  
  </div>
</template>

<script>
import Review from '../components/Review'

export default {
  name: "BeerView",
  props: ["beerId",'beers'], 
  components: {
    Review
  },
     
  mounted() {
    this.getSpecificBeer()
  },
  data() {
    return {
      beer: {},
    };
  },
  
  methods: {
    getSpecificBeer() {
      this.beer = this.beers.filter((beer) => beer.id == this.beerId)[0];
      console.log(this.beers)      
    },
    
  },
  
};
</script>

<style scoped>
  .card {
    margin-top: 2em;
  }
  .review {
    margin-top: 2em;
  }
  
</style>