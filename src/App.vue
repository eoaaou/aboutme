<template>
  <app-header />
  <skill-box />
  <app-footer />  
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
  font-size: x-large;
  font-weight:900;
  color:#C0C0C0;
}

template {
    position: relative;
    height: 100%;
}
</style>
