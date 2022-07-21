<template>
  <div class="welcome">
   <Welcome />   
  </div>  
</template>

<script>
import Welcome from '../components/Welcome'

export default {
  name: 'Home',
  components: {    
    Welcome
  }
}
</script>

<style scoped>
  .welcome{
    justify-content: center;
    margin: 2.5vmax;   
    z-index: 1;
  }  
</style>
