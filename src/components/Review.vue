<template>
  <div class="submitReview">
      <form v-on:submit.prevent="submitReview">
        
        <div class="form-group">
          <textarea type="text" id="content" v-model="content"></textarea>
        </div>
        <br>
        <div class="form-group">
          <input type="text" id="name" v-model="name">
        </div>
        <div class="form-group">
          <input type="submit" value="Submit">
        </div>
      </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {  
  name: 'Review',
  data(){
    return {
      content: '',
      name: ''
    }
  },
  
  methods: {
    onUpload(event) {
      this.content = event.target.text[0]
    },
    submitReview() {
      const review = new FormData();
      review.append('name', this.review.name)
      review.append('content', this.review.content)

      axios
        .post(`http://localhost:4000/reviews/new-review`, review, { })
        .then((response) => {
          
          console.log(response.data)
        })

    }
    
  },
  
}

</script>