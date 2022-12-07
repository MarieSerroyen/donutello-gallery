<script setup>
import Navigation from './components/Nav.vue'
import Orders from './components/Orders.vue'
</script>

<template>
  <div class="navBar"><Navigation/></div>
  
  <Orders/>
    
    
 
  
</template>

<style scoped>
.navBar{
  position: fixed;
  z-index: 100;
}
</style>
