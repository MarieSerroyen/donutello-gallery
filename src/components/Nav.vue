<script setup>
import { ref } from 'vue'


</script>

<template>
  <nav>
    <div class="logo"></div>
  </nav>

 
</template>

<style scoped>
nav {
  background-color: #E72C70;
  position: fixed;
  left: 0;
  top: 0;
  height: 79px;
  width: 100%;
}
.logo{
  color: white;
  background-image: url('../assets/donuttello-logo.png');
  background-size: 130px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 25px;
}
</style>
