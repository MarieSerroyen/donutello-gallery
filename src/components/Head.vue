<script setup>
import { ref } from 'vue'

</script>

<template>
    <h1>Bestellingen</h1>
    <div class="controls">
        <a href="#">Nieuwste eerst</a>
        <a href="#">Oudste eerst</a>
    </div>
    
 
</template>

<style scoped>
h1{
    font-family: 'Dosis', sans-serif;
    padding-top: 140px;
    text-align: center;
}

.controls{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

a{
    font-family: 'Dosis', sans-serif;
    color: #F1E856;
    background-color: #E72C70;
    text-decoration: none;
    padding: 12px 22px;
    margin: 0 10px;
    border-radius: 25px;
}
</style>