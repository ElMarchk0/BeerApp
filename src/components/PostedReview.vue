<template>
  <div class="reviews">
    <ul v-for="review in reviewData" class="list-unstyled" :key="review.date">
       <b-media tag="li">
        <h3>{{review.name}}</h3>
        <p>{{review.content}}</p>
        <b-form-rating class="rating-md-no-border" variant="info" :value="review.rating" show no-border readonly></b-form-rating>
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
    
      methods() {
        
      },    
      
      data() {
        return {
          reviewData: []
        }
      },
    }
    
    </script>