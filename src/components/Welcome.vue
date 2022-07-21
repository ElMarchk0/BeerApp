<template>
<div class="mx-auto h-75 d-inline-block h-responsive" :adaptive="true" :resizable="true" style="padding-bottom: 2em">
  <div>
    <h4>Welcome to the Victoria Beer API</h4>
      <b-card img-src="https://lh3.googleusercontent.com/pw/AM-JKLVoZlaMXcakSOghp1haLgo9fET6rFZiz0jMglTTS2uahAkRAtRyUGAsYHbq-ZJvNJf5hnsNKDFQmJsqmEoKjB7mA66JOZ_HySsv_rWnzUpqHS8mCR0FLoHr4N8E9oULtUh1n0cPfuLn-m-BPVtlJEXd=w952-h597-no?authuser=0" img-alt="Card image" img-top>
        <b-card-text>
          Search for beer brewed in the Greater Victoria Area by name, type and brewery!
        </b-card-text>
      </b-card>
  </div>
</div>
</template>

<script>
export default{
  name: 'Welcome',
  data(){
    return {
      image: {
        landing: require('../assets/beerpic.png')
      }
    }
  } 
}
</script>
