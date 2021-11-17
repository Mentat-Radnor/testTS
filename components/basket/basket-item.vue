<template>
  <li class="basket__item">
    <img :src="item.image" :alt="item.title" class="basket__preview" />
    <h2>{{ item.title }}</h2>
    <p>{{ item.price }}</p>
    <div>{{ item.count }}</div>
    <div>{{ sum }}</div>
    <button type="button" class="btn" @click="removeToBasket">
      Remove Basket
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasketItem',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    sum(): Number {
      return this.item.price * this.item.count
    },
  },
  methods: {
    removeToBasket(): void {
      this.$emit('remove-to-basket', this.item)
    },
  },
})
</script>

<style scoped>
.basket__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.basket__preview {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
</style>
