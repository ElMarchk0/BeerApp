<template>
  <div class="m-auto" style="width: 60vh; margin: 5vmax; padding-bottom: 2em">

  <div >
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
export default {
  name: "BeerView",
  props: ["beerId",'beers'],
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