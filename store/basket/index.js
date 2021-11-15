export const state = () => ({
  basket: [],
})

export const mutations = {
  addElement(state, value) {
    // const findElement = state.basket.findIndex(
    //   (element) => element.id === value.id
    // )
    // if (findElement !== -1) {
    //   state.basket[findElement].count += 1
    // } else {
    //   value.count = 1
    state.basket.push(value)
    // }
  },
  removeElement(state, id) {
    const findElement = state.basket.findIndex((element) => element.id === id)
    state.basket.splice(findElement, 1)
  },
}

export const actions = {
  addBasket({ commit }, value) {
    commit('addElement', value)
  },

  removeToBasket({ commit }, id) {
    commit('removeElement', id)
  },
}
