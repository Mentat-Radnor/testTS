export default ({ $axios }, inject) => {
  inject('GetProduct', () => $axios.$get(`/products`))
}
