<template>
  <div>
    <div class="card" style="width: 25rem">    
      <div class="card-body">
        <h3 class="card-title">{{beer.id}}</h3>
        <h5 class="card-title">{{beer.name}}</h5>
        Test
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BeerView',
  data () {
    return {
      beer: null,
      router: this.$route.params.id
    }
  },
  mounted () {
    this.getBeer()
  },  
  methods: {
    async getBeer() {
      axios.get(`https://morning-tor-81265.herokuapp.com/beers?id=${this.$route.params.id}`)
      .then((response) => response.data)      
    }
  }
}

</script>