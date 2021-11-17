<template>
  <div>
    <h2>Поздравляю !</h2>
    <p>Ваш заказ успешно оформлен</p>
    <button type="button" class="btn" @click="close">Закрыть</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    close() {
      this.$emit('close-modal')
    },
  },
})
</script>
