<template>
  <div class="reviews">
    <ul v-for="review in reviewData" class="list-unstyled" :key="review._id">
       <b-media tag="li">
        <h3>{{review.name}}</h3>
        <p>{{review.content}}</p>
      </b-media>
    </ul>    
  </div>
</template>

<script>
    import axios from "axios";
    export default {
      name: "PostedReview",
      props: ["reviews"],
      mounted () {
        axios.get(`http://localhost:4000/reviews`).then((data) => {        
          const reviews = data.data        
          this.reviewData = reviews.filter(review => review.beerId === this.$route.params.beerId)        
          console.log(this.reviewData)
        })      
      }, 
    
      
      data() {
        return {
          reviewData: []
        }
      },
    }
    </script>