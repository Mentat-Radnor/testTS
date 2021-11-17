<template>
  <form class="form" @submit.prevent="send">
    <base-input
      v-for="(item, index) in formData"
      :key="'input' + index"
      v-model="item.value"
      :item="item"
    ></base-input>

    <button type="submit" class="btn">Оформить Заказ</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from '@/components/base/base-input.vue'
export default Vue.extend({
  name: 'BaseForm',
  components: { 'base-input': BaseInput },
  data() {
    return {
      success: false,
      formData: [
        { type: 'text', label: 'ФИО', value: '' },
        { type: 'number', label: 'Номер телефона', value: null },
      ],
    }
  },
  methods: {
    send() {
      this.$emit('send-order')
    },
  },
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000063;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
