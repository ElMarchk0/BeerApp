import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

export const beerApi = () => {
  const state = reactive({
    search: null,
    loading: true,
    data: []
  })

  watch(() => {
    const BEER_API_URL =`http://localhost:3000/beers?q=${state.search}`

    axios
      .get(BEER_API_URL)
      .then((response) => {
        
        console.log(response.data)
        state.data = response.data
        console.log(state.data)
        state.loading = false
      })

      
  })

  return state
}