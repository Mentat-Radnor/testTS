<template>
  <div class="container">
    <h1>Корзина</h1>

    <ul class="basket__list">
      <basket-item
        v-for="(item, index) in basket"
        :key="'basket' + index"
        :item="item"
        @remove-to-basket="removeToBasket($event)"
      ></basket-item>
    </ul>
    <div class="basket__line">
      <div>Сумма покупки: {{ sum }} $</div>
      <button type="button" class="btn" @click="placeAnOrder">
        Оформить заказ
      </button>
      <button
        v-show="basket.length > 0"
        type="button"
        class="basket__btn"
        @click="removeAllBasket"
      >
        Удалить Всю корзину
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BasketItem from '@/components/basket/basket-item.vue'
export default Vue.extend({
  components: { 'basket-item': BasketItem },
  computed: {
    basket(): Array<any> {
      return this.$store.state.basket.basket
    },
    sum() {
      return this.basket
        .reduce(
          (accumulator: number, currentValue: any) =>
            accumulator + currentValue.count * currentValue.price,
          0
        )
        .toFixed(2)
    },
  },
  methods: {
    removeToBasket(id: String) {
      this.$store.dispatch('basket/removeToBasket', id)
    },
    removeAllBasket() {
      this.$store.dispatch('basket/removeAllBasket')
    },
    placeAnOrder() {
      this.$store.dispatch('modal/changeModal', true)
    },
  },
})
</script>

<style lang="scss" scoped>
.basket__list {
  width: 100%;
  padding: 0px;
  display: grid;
  grid-gap: 20px;
}

.basket__line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
}

.basket__btn {
  padding: 10px 30px;
  background: #00000000;
  border: 1px solid #0e90ff;
  cursor: pointer;
  &:hover {
    background: #0e90ff;
    color: #ffffff;
  }
}
</style>
