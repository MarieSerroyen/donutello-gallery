<script setup>
import { ref } from 'vue'

</script>

<template>
    <h1>Bestellingen</h1>
    <div class="controls">
        <a id="btnNewest" class="btn btn--active" href="#">Nieuwste eerst</a>
        <a id="btnOldest" class="btn" href="#">Oudste eerst</a>
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

.btn{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 0.8em;;
    color: #E72C70;
    border: 3px solid #E72C70;
    text-decoration: none;
    padding: 8px 16px;
    margin: 0 4px;
    border-radius: 30px;
}

.btn--active{
    color: #F1E856;
    background-color: #E72C70;
}

@media (min-width: 375px) {
    .btn{
        font-size: 1.2em;
        padding: 12px 22px;
        margin: 0 10px;
    }
    
}
</style>