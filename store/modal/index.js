export const state = () => ({
  modalIsActive: false,
})
export const mutations = {
  changeModal(state, value) {
    state.modalIsActive = value
  },
}

export const actions = {
  changeModal({ commit }, value) {
    commit('changeModal', value)
  },
}
