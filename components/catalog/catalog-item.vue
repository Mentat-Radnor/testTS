<template>
  <div class="card">
    <img :src="catalogItem.image" :alt="catalogItem.title" class="card__img" />

    <h2 class="card__title">{{ catalogItem.title }}</h2>
    <span class="card__category">{{ catalogItem.category }}</span>
    <p class="card__text">{{ catalogItem.description }}</p>

    <div class="card__nav">
      <div>Price: {{ catalogItem.price }}$</div>
      <div>Rait {{ catalogItem.rating.rate }}</div>
    </div>

    <button
      v-if="!isBasket"
      type="button"
      class="card__btn"
      @click="saveToBasket()"
    >
      Купить
    </button>

    <div v-else class="card__btn-wrap">
      <button type="button" class="card__btn" @click="saveToBasket()">+</button>
      {{ catalogItem.count }}
      <button type="button" class="card__btn" @click="removeToBasket()">
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogItem',
  props: {
    catalogItem: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    basket(): Array<any> {
      return this.$store.state.basket.basket
    },
    isBasket(): Boolean {
      if (this.basket) {
        return this.basket.some(
          (element: any) => element.id === this.catalogItem.id
        )
      } else {
        return false
      }
    },
  },

  methods: {
    saveToBasket(): void {
      this.$emit('add-to-basket', this.catalogItem)
    },
    removeToBasket(): void {
      this.$emit('remove-to-basket', this.catalogItem)
    },
  },
})
</script>

<style scoped>
.card {
  border: 1px solid #3f3f3f;
  border-radius: 16px;
  padding: 20px;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__title {
  font-size: 18px;
}
.card__img {
  width: 100%;
  max-height: 200px;
  height: 100%;
  object-fit: contain;
}

.card__btn {
  padding: 10px 15px;
  font-weight: 700;
  border: none;
  background: #0e90ff;
  color: #fff;
  border-radius: 4px;

  cursor: pointer;
  transition: background 0.3s;
}

.card__btn:hover {
  background: #3fa6ff;
}

.card__btn-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__category {
  position: absolute;
  background: #0e90ff;
  color: #fff;
  padding: 2px 20px;
  font-size: 14px;
  border-radius: 5px;
}

.card__nav {
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
}
</style>
