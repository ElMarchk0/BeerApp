<template>
  <div class="container">
    <h1>{{ title }}</h1>
    
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String
    
  },
  
  components: {
    
  }
}
</script>

<style scoped>
  .container {
    width: 100%;    
    place-content: center;
    border: 10px solid rgb(blue);
    z-index: 100;    
  }

  h1 {
    font-size: 48px;
  }
</style>