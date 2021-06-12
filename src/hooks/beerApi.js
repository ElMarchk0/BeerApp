import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

const BEER_API_URL = `http://localhost:3000/beers`

export const beerApi = () => {
    const state = reactive({
        search: null,
        loading: true,
        data: []
    })

    watch(() => {
        axios
            .get(`${BEER_API_URL}?q=${state.search}`)
            .then((response) => {
                state.data = response.data
                state.loading = false
                console.log(response)
            })
    })

    return state
}