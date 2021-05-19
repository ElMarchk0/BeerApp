<template>
  <div class="container">
    <h1 class="text-center">{{ title }}</h1>
    <h4 class="text-center text-muted">{{ welcome }}</h4>
    
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
    welcome: String
  },
  
  components: {
    
  }
}
</script>

<style scoped>
  
  h1 {
    font-size: 48px;
  }
</style>