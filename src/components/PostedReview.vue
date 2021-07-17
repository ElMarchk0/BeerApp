<template>
  <div class="reviews">
    <ul v-for="review in reviewData" class="list-unstyled" :key="review._id">
       <b-media tag="li" class="my-1">
        <p class="mb-0">{{review.content}}</p>
        <h5 class="mt-0 mb-1">{{review.name}}</h5>        
        <b-form-rating class=" mx-auto w-75 " variant="primary" :value="review.rating" show no-border readonly></b-form-rating>
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
          this.reviewData = reviews.filter(review => review.beerId === this.$route.params.beerId).sort((a, b) => (a.id > b.id ? 1 : -1))       
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