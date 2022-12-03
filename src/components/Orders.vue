<script setup>
import { ref } from 'vue'

</script>

<template>
    <h1>Bestellingen</h1>
    <div class="controls">
        <a id="btnNewest" class="btn btn--active" href="#">Nieuwste eerst</a>
        <a id="btnOldest" class="btn" href="#">Oudste eerst</a>
    </div>
    <div class="orders">
      <ul >
        <li class="order">
            <img class="order--image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order--title">My Donut</h2>
            <p class="order--info">Smaak: normal</p>
            <p class="order--info">Glazuur: none</p>
            <p class="order--info">Topping: none</p>
            <p class="order--info">Logo: none</p>
        </li>
        <li class="order">
            <img class="order--image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order--title">My Donut</h2>
            <p class="order--info">Smaak: normal</p>
            <p class="order--info">Glazuur: none</p>
            <p class="order--info">Topping: none</p>
            <p class="order--info">Logo: none</p>
        </li>
        <li class="order">
            <img class="order--image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order--title">My Donut</h2>
            <p class="order--info">Smaak: normal</p>
            <p class="order--info">Glazuur: none</p>
            <p class="order--info">Topping: none</p>
            <p class="order--info">Logo: none</p>
        </li>
        <li class="order">
            <img class="order--image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order--title">My Donut</h2>
            <p class="order--info">Smaak: normal</p>
            <p class="order--info">Glazuur: none</p>
            <p class="order--info">Topping: none</p>
            <p class="order--info">Logo: none</p>
        </li>
        <li class="order">
            <img class="order--image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order--title">My Donut</h2>
            <p class="order--info">Smaak: normal</p>
            <p class="order--info">Glazuur: none</p>
            <p class="order--info">Topping: none</p>
            <p class="order--info">Logo: none</p>
        </li>
      </ul>
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

.orders ul{
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 0;
    
}

.order{
    list-style: none;
    margin: 15px;
    padding: 20px;
    box-shadow: 4px 4px 30px 3px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    width: 220px;
    height: 380px;
    
}

.order--image{
    width: 190px;
    height: auto;
    padding: 17px;
}

.order--title{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 2em;
    margin: 0;
}

.order--info{
    font-family: 'Dosis', sans-serif;
    font-size: 1em;
    color: #E72C70;
    line-height: 7px;
}

@media (min-width: 375px) {
    .btn{
        font-size: 1.2em;
        padding: 12px 22px;
        margin: 0 10px;
    }
    
}
</style>