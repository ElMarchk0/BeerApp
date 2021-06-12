<template>
  <div>
    <ul v-for="beer in beersData" class="list-unstyled" :key="beer.id">
      <b-media tag="li">
        <br />
        <h2 class="mt-0 mb-1 text-center">
        <router-link
              :to="{
                name: 'BeerView',
                params: { beerId: beer.id, beers: beersData },
              }"
              >
        {{ beer.name }}</router-link
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
      axios.get(`https://morning-tor-81265.herokuapp.com/beers`).then((data) => {
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
