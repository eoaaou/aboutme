<template>
  <div class="wrapper">
    <app-header />
    <skill-box />
    <app-footer />
  </div>   
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue'
import SkillBox from '@/components/SkillBox.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    SkillBox,
    AppFooter   
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/_app.scss';
</style>
