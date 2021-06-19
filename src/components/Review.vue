<template>
  <div class="submitReview" >
      <form v-on:submit.prevent="submitReview">
        <textarea type="text" id="content" v-model="review.content"></textarea>
        <br>
        <input type="text" id="name" v-model="review.name">
        <input type="submit" value="Submit">        
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
        beerId: ''
      }
    }
  },
  
  methods: {
    submitReview() {
      axios
        .post(`http://localhost:4000/reviews/new-review`, this.review)
        .then((response) => {          
          console.log(response.data)
        })
    }    
  },  
}

</script>