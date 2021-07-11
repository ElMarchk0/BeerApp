<template>
  <div class="reviews">
    <ul v-for="review in reviewData" class="list-unstyled" :key="review.date">
       <b-media tag="li" class="my-1">
        <p class="mb-0">{{review.content}}</p>
        <h5 class="mt-0 mb-1">{{review.name}}</h5>        
        <b-form-rating class="rating-md-no-border mb-2" variant="primary" :value="review.rating" show no-border readonly></b-form-rating>
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
        axios.get(`http://192.168.0.26:4000/reviews`).then((data) => {        
          const reviews = data.data        
          this.reviewData = reviews.filter(review => review.beerId === this.$route.params.beerId).sort((a, b) => {
            b.date - a.date;
          }),       
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