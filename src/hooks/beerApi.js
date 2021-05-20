import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

export const beerApi = () => {
  const state = reactive({
    search: null,
    loading: true,
    data: []
  })

  watch(() => {
    const BEER_API_URL = `https://morning-tor-81265.herokuapp.com/beers`

    axios
      .get(`${BEER_API_URL}?q=${state.search}`)
      .then((response) => {        
        state.data = response.data  
        console.log(response.data)      
        state.loading = false
      })

      
  })

  return state
}