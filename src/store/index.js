import { createStore } from 'vuex'

export default createStore({
  state: {
    beer: {},
    beers: [],
  },

  mutations: {
    getBeer (state) {
      fetch(`http://localhost:3000/beers`)
        .then(res => res.json())
        .then(data => {
          state.beers = data
        })
    }
  },
  getters: {
    getSpecificBeer: state => id => {
      return state.beers.filter(beer => beer._id == id)[0]
    }
  }
})