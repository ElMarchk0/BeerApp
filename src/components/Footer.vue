<template>
  <footer>
    
    <router-link to="/about">About</router-link>
    <br>
    <a href="http://localhost:3000/beers">View The Api</a>
    <br>
    <a href="https://github.com/ElMarchk0/BeerApp">Github</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a {
  color: #333;
}
footer {
  bottom: 0;
  text-align: center;
  justify-content: center;
  }
</style>