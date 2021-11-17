<template>
  <div>
    <base-nav></base-nav>
    <Nuxt />
    <base-modal v-if="modalIsActive"></base-modal>
  </div>
</template>

<script>
import BaseNav from '@/components/base/base-nav.vue'
import BaseModal from '@/components/base/base-modal.vue'
export default {
  components: { 'base-nav': BaseNav, 'base-modal': BaseModal },
  computed: {
    modalIsActive() {
      return this.$store.state.modal.modalIsActive
    },
  },
  async mounted() {
    await this.$store.dispatch('basket/loadingLocalStorage')
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
