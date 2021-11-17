<template>
  <label class="input__wrap">
    <span class="input__label">{{ item.label }}</span>
    <input
      class="input"
      :type="item.type"
      :value="item.value"
      required
      @input="InputData($event)"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseInput',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    InputData(event: any) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>
