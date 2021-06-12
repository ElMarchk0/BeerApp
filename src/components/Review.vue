<template>
  <div class="submitReview">
      <form v-on:submit.prevent="submitReview">
        <input type="text" id="review" v-model="review">
        <input type="submit" value="Submit">
      </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {  
  name: 'Review',
 
  data() {
    return {
      data: {
        review: null,
      }
    }
  },
  methods: {
    submitReview() {
      // const review = new Review()
      // review.append('content', this.content)
      axios
        .post("http://localhost:4000/reviews/new-review", {'review': this.review})
        .then((data) => {
          this.review = ''
          console.log(data)
        })
    }
  }
}
</script>