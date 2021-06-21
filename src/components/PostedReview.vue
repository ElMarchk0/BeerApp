<template>
  <div class="review-list">
    
      <ul v-for="review in filteredReviews" :key="review.id">
        <h2>{{review.content}}</h2>
        <h3>{{review.name}}</h3>
      </ul>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostedReview",
  props: ["reviews"],

  data() {
    return {
      filteredReviews: []
    }
  },
  mounted() {
    if (this.reviews === null || this.reviews === undefined || this.reviews.beerId === this.beerId) {
      axios.get(`http://localhost:4000/reviews`).then((res) => {
        
        const reviews = res.data
        this.filteredReviews = reviews.filter(review => {
          return review.beerId.match(this.$route.params.id)
        })
        console.log(res)
      });
    }
  },
  
}

  // methods: {
  //   navigate(id) {
  //     this.$router.push({ name: "BeerView", params: { id: id } });
  //   },
  // },
  

</script>