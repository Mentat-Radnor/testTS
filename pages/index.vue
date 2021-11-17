<template>
  <div class="container">
    <Logo />

    <h1 class="title">Каталог</h1>
    <nuxt-link to="/basket" class="basket"
      >Корзина {{ countItemsInBasket }}</nuxt-link
    >
    <div class="catalog">
      <catalog-item
        v-for="item in products"
        :key="'catalog' + item.id"
        :catalog-item="item"
        @add-to-basket="addToBasket($event)"
        @remove-to-basket="removeToBasket($event)"
      ></catalog-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatalogItem from '@/components/catalog/catalog-item.vue'

export default Vue.extend({
  components: { 'catalog-item': CatalogItem },
  // async asyncData({ $axios }: any) {
  //   const products: Array<any> = await $axios.$get('/products')
  //   return { products }
  // },
  computed: {
    basket(): Array<Object> {
      return this.$store.state.basket.basket
    },
    countItemsInBasket(): Number {
      return this.basket.reduce(
        (accumulator: Number, currentElemet: any) =>
          accumulator + currentElemet.count,
        0
      )
    },
    products(): Array<Object> {
      return this.$store.state.products.products
    },
  },
  watch: {
    basket() {
      const changeProducts = [...this.products, ...[]]

      changeProducts.forEach((element: any, index: number) => {
        const findElement = this.basket.find(
          (item: any) => item.id === element.id
        )
        if (findElement) {
          changeProducts.splice(index, 1, findElement)
        }
      })
      this.$store.dispatch('products/updateProducts', changeProducts)
    },
  },
  methods: {
    addToBasket(value: any) {
      this.$store.dispatch('basket/addBasket', value)
    },
    removeToBasket(value: any) {
      this.$store.dispatch('basket/removeToBasket', value)
    },
  },
})
</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  width: 100%;
}

.basket {
  padding: 10px 30px;
  background: #0e90ff;
  text-decoration: none;
  color: #fff;

  position: fixed;
  top: 5%;
  right: 5%;
}
</style>
