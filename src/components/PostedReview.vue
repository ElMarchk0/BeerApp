<template>
  <div class="review-list">
    
      <ul v-for="review in reviewData" :key="review.beerId">
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
  mounted() {
    if (this.reviews === null || this.reviews === undefined || this.reviews.beerId === this.beerId) {
      axios.get(`http://localhost:4000/reviews`).then((data) => {
        
        this.reviewData = data.data;
        
        console.log(data)
      });
    }
  },
  
  data() {
    return {
      reviewData: this.reviews,
    };
  },

  // methods: {
  //   navigate(id) {
  //     this.$router.push({ name: "BeerView", params: { id: id } });
  //   },
  // },
  
};
</script>