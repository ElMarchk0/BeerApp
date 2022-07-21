71 lines (66 sloc)  1.91 KB
<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      class="navbar w-responsive navbar-dark bg-dark justify-content-around"
    >
      <b-navbar-brand href="/">The Great Victoria Beer API</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Search Input -->
        <b-navbar-nav class="mx-auto">
          <b-nav-form class="mx-auto">
            <input type="text" :value="beerQuery" @keyup="handleChange" />
            <input
              @click="handleSubmit"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              value="Search"
              variant="primary"              
            />
          </b-nav-form>
          <b-navbar-nav class="mx-auto">
            <!-- Links -->
            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="https://morning-tor-81265.herokuapp.com/beers"
              >API</b-nav-item
            >
            <b-nav-item href="https://github.com/ElMarchk0/BeerApp"
              >Github</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import axios from "axios";
import { beerApiUrl } from "../utils/constants";

export default {
  name: "Navbar",
  props: ["search"],
  
  setup() {
    const beerQuery = ref();
   
    return {
      beerQuery,      
      handleSubmit(event) {
        event.preventDefault();        
        this.getBeer(beerQuery.value);
        console.log(beerQuery.value);
      },
      handleChange(event) {
        beerQuery.value = event.target.value;
      },
      async getBeer(search) {
        const res = await axios.get(`${beerApiUrl}?q=${search}`);
        this.$router.push({ name: "Beers", params: { beers: res.data }, query: {search: search} });       
      },      
    };    
  },
};
</script>