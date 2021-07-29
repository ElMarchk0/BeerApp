<template>
  <div class="mx-auto w-75 d-inline-block w-responsive" :adaptive="true" :resizable="true">
    <ul v-for="beer in beersData" class="list-unstyled" :key="beer.id">
      <b-media tag="li">
        <br />
        <h2 class="mt-0 mb-1 text-center">
        <b-link
              :to="{
                name: 'BeerView',
                params: { beerId: beer.id, beers: beersData },
              }"
              >
        {{ beer.name }}</b-link
            >
        </h2>
        <h4 class="mt-0 mb-1 text-center">{{ beer.brand }}</h4>
        
      </b-media>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Beers",
  props: ["beers"],
  mounted() {
    if (this.beers === null || this.beers === undefined) {
      axios.get(process.env.VUE_APP_BEER_API_URL).then((data) => {
        this.beersData = data.data;
      });
    }
  },
  data() {
    return {
      beersData: this.beers,
    };
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: "BeerView", params: { id: id } });
    },
  },
  
};
</script>
