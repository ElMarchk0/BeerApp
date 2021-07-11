<template>
  <div class="submitReview" >
      <form v-on:submit.prevent="submitReview">
        <b-form-textarea type="textarea" label="Material textarea" :rows="5" v-model="review.content" placeholder="Write a review... "></b-form-textarea>
        <br>
        <b-form-input type="text" id="name" placeholder="name" v-model="review.name"></b-form-input>
        <b-form-rating v-model="review.rating" variant="danger" class="my-2" ></b-form-rating>
        
        <b-button type="submit" variant="primary" class="my-1">Submit Review</b-button>  
      </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {  
  name: 'Review',
  data(){
    return {
      review: {
        name: '',
        content: '',
        beerId: this.$route.params.beerId,
        rating: null,
        date: new Date(),
      }
    }
  },
  
  methods: {
    submitReview() {
      if (this.review.name === '' || this.review.content === '' || this.review.rating === null ) {
        alert('Please fill out every field.')
      } else {
        axios
          .post(`http://192.168.0.26:4000/reviews/new-review`, this.review)
          .then((response) => {          
            console.log(response.data)
          })
      }
    },
  } 
}

</script>