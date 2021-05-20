<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" class="te">The Great Victoria Beer API</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Search Input -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <input
            type="text"
            :value="beerQuery"
            @keyup="handleChange"
          />
        <input @click="handleSubmit" type="submit" value="Search" />
        </b-nav-form> 
        <b-navbar-nav>
        <!-- Links -->
        <b-nav-item href="/about">About</b-nav-item>
        <b-nav-item href="#">API</b-nav-item>
        <b-nav-item href="https://github.com/ElMarchk0/BeerApp">Github</b-nav-item>
      </b-navbar-nav>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Navbar',
  props: ['search'],
  setup({ search }, {emit}) {
    const beerQuery = ref(search)

    return {
      beerQuery,
      handleSubmit(event) {
        event.preventDefault()
        emit('search', beerQuery.value)
        console.log(beerQuery.value)
      },
      handleChange(event) {
        beerQuery.value = event.target.value
        
      }
    }
    
    
  },
}
</script>