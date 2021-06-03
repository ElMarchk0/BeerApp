<template>
  <div>
    <ul v-for="beer in beersData" class="list-unstyled" :key="beer.id">
      <b-media tag="li">
        <br />
        <h2 class="mt-0 mb-1 text-center">{{ beer.name }}</h2>
        <h4 class="mt-0 mb-1 text-center">{{ beer.brand }}</h4>
        <p class="mb-0 mb-1 text-center">{{ beer.description }}</p>
        <p class="mb-0 mb-1 text-center">ABV: {{ beer.ABV }}</p>
        <ul>
          <li>
            <router-link
              :to="{
                name: 'BeerView',
                params: { beerId: beer.id, beers: beersData },
              }"
              >{{ beer.id }}</router-link
            >
          </li>
        </ul>
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
      axios.get(`http://localhost:3000/beers`).then((data) => {
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
