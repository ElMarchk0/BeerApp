<template>
  <div >
    <div class="submitReview" >
      <form v-on:submit.prevent="submitReview">
        <b-form-textarea type="textarea" label="Material textarea" :rows="5" v-model="review.body" placeholder="Write a review... "></b-form-textarea>
        <br>
        <b-form-input type="text" id="name" placeholder="name" v-model="review.name"></b-form-input>
        <b-form-rating v-model="review.rating" variant="primary" class="my-2" ></b-form-rating>
        
        <b-button type="submit" variant="primary" class="my-1">Submit Review</b-button>  
      </form>
    </div>
    <div class="reviewList">
         <PostedReview /> 
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostedReview from './PostedReview'
export default {  
  name: 'Review',
  components: {
    PostedReview
  },
  data(){
    return {
      review: {
        name: '',
        body: '',
        beerId: this.$route.params.beerId,
        rating: null,
        date: new Date(),
        review: 0
      }
    }
  },
  
  methods: {
    submitReview() {
      if (this.review.name === '' || this.review.content === '' || this.review.rating === null ) {
        alert('Please fill out every field.')
      } else {
        axios
          .post(`http://localhost:8000/api/reviews/`, this.review)
          .then((response) => {          
            console.log(response.data)            
          })
      }
      this.review++
    },     
  } 
}
</script>

<style >
  .reviewList {
    margin-top: 2em;
  }
</style>