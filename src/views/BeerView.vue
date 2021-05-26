<template>
  <div>
    <div class="card" style="width: 25rem">    
      <div class="card-body">
        <h3 class="card-title">Beername: {{beer.name}}</h3>
        <h5 class="card-title">{{beer.brand}}</h5>
        Test
      </div> 
      Test
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';

export default {
  setup () {
    const route = useRoute();
    const store = useStore();
    const beer = ref({})
    onMounted(() => {
      beer.value = store.getters.getSpecificBeer(route.params.id)
    });
    return {
      beer
    }
  }

}

</script>