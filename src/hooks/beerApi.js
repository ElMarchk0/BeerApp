import { reactive, watchEffect } from '@vue/composition-api'
import axios from 'axios'
import { beerApiUrl } from '../utils/constants'

export const beerApi = () => {
  const state = reactive({
    search: '',
    loading: true,
    data: []
  })

  watchEffect(() => {
    axios
      .get(`${beerApiUrl}?q=${state.search}`)
      .then((response) => {
        state.data = response.data
        state.loading = false
        console.log(response)
      })
    })
	return state
}