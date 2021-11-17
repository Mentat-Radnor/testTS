<template>
  <div class="modal" @click="closeModal">
    <div class="modal__content" @click.stop="">
      <base-form v-if="!success" @send-order="sendOrder"></base-form>
      <base-success v-if="success" @close-modal="closeModal"></base-success>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseSuccess from '@/components/base/base-success.vue'
import BaseForm from '@/components/base/base-form.vue'
export default Vue.extend({
  components: {
    'base-form': BaseForm,
    'base-success': BaseSuccess,
  },
  name: 'BaseModal',
  data() {
    return {
      success: false,
    }
  },
  methods: {
    sendOrder() {
      console.log('axios.Post')
      this.success = true
    },
    closeModal() {
      this.$store.dispatch('modal/changeModal', false)
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

.modal__content {
  background: #ffffff;
  max-width: 600px;
  width: 100%;
  padding: 20px;
}
</style>
