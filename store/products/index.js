export const state = () => ({
  products: [],
})
export const mutations = {
  saveProducts(state, value) {
    state.products = value
  },
}

export const actions = {
  async getProducts({ commit }) {
    const data = await this.$GetProduct()
    commit('saveProducts', data)
  },

  updateProducts({ commit }, value) {
    commit('saveProducts', value)
  },
}
