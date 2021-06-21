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
      <Review />
      <PostedReview />
    </div>    
  </div>  
</template>

<script>
import Review from '../components/Review'
import PostedReview from '../components/PostedReview'
export default {
  name: "BeerView",
  props: ["beerId",'beers'], 
  components: {
    Review,
    PostedReview
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
</style>