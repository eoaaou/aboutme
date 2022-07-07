<template>
  <div class="wrapper" id="wrapper">
    <app-header />
    <app-body />
    <app-footer />
  </div>   
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppBody from '@/components/AppBody.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter   
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/_app.scss';
</style>
