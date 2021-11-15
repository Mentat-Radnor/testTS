<template>
  <div class="container">
    <h1>Корзина</h1>

    <ul class="basket__list">
      <basket-item
        v-for="(item, index) in basketFilterArray"
        :key="'basket' + index"
        :item="item"
        @remove-to-basket="removeToBasket($event)"
      ></basket-item>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BasketItem from '@/components/basket/basket-item.vue'
export default Vue.extend({
  components: { 'basket-item': BasketItem },
  computed: {
    basket(): Array<Object> {
      return this.$store.state.basket.basket
    },
    basketFilterArray(): Array<Object> {
      const filteredArray: Array<Object> = []
      this.basket.filter((item: any) => {
        if (!filteredArray.some((element: any) => element.id === item.id)) {
          filteredArray.push(item)
          return true
        } else {
          return false
        }
      })
      return filteredArray
    },
  },
  methods: {
    removeToBasket(id: String) {
      this.$store.dispatch('basket/removeToBasket', id)
    },
  },
})
</script>

<style scoped>
.basket__list {
  width: 100%;
  padding: 0px;
  display: grid;
  grid-gap: 20px;
}
</style>
