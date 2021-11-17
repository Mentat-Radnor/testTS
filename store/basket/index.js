export const state = () => ({
  basket: [],
})

export const mutations = {
  addElement(state, value) {
    const findElement = state.basket.findIndex(
      (element) => element.id === value.id
    )
    value = Object.assign({}, value)
    if (findElement !== -1) {
      state.basket[findElement].count += 1
      state.basket.splice(0, 0)
    } else {
      value.count = 1
      state.basket.push(value)
    }

    localStorage.setItem('basket', JSON.stringify(state.basket))
  },
  removeElement(state, value) {
    const findElement = state.basket.findIndex(
      (element) => element.id === value.id
    )

    if (state.basket[findElement].count > 1) {
      state.basket[findElement].count -= 1
      state.basket.splice(0, 0)
    } else {
      state.basket.splice(findElement, 1)
    }
    localStorage.setItem('basket', JSON.stringify(state.basket))
  },

  loadingLocalStorage(state) {
    const basket = JSON.parse(localStorage.getItem('basket'))

    if (basket) {
      state.basket = basket
    }
  },

  removeAllBasket(state) {
    state.basket = []
  },
}

export const actions = {
  addBasket({ commit }, value) {
    commit('addElement', value)
  },

  removeToBasket({ commit }, value) {
    commit('removeElement', value)
  },

  loadingLocalStorage({ commit }) {
    commit('loadingLocalStorage')
  },

  removeAllBasket({ commit }) {
    commit('removeAllBasket')
  },
}
