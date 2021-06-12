import { reactive, watch } from '@vue/composition-api'
import axios from 'axios'

const BEER_API_URL = `https://morning-tor-81265.herokuapp.com/beers`

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