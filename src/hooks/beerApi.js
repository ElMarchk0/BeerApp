import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

export const beerApi = () => {
  const state = reactive({
    search: '',
    loading: true,
    data: []
  })

  watch(() => {
    axios
      .get(`${process.env.VUE_APP_BEER_API_URL}?q=${state.search}`)
      .then((response) => {
        state.data = response.data
        state.loading = false
        console.log(response)
      })
    })
	return state
}