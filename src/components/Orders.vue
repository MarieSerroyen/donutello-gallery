<script setup>
import { ref, onMounted, reactive } from 'vue'
    
let donutsData = reactive({ commentData: [] });

//fetch naar de api
onMounted(() => {
    fetch("https://donuttello-api-team6.onrender.com/api/v1/donuts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }
    )
        .then(response => response.json())
        .then(data => {
            donutsData.donut = data;
            console.log(donutsData.donut.data.donuts);
    });
    
});

</script>

<template>
    <h1>Bestellingen</h1>
    <div class="controls">
        <a id="btnNewest" class="btn btn--controls btn--active" href="#">Nieuwste eerst</a>
        <a id="btnOldest" class="btn btn--controls" href="#">Oudste eerst</a>
    </div>
    <div class="orders">
      <ul >
        <li class="order" v-for="donut in donutsData.donut.data.donuts" :key="donutsData.donut.id">
            <img class="order__image" src="../assets/donut-previeuw.png" alt="donut preview">
            <h2 class="order__title">{{ donut.name }}</h2>
            <p class="order__creator">{{ donut.company }}</p>
            <p class="order__date">{{ donut.date }}</p>
            <p class="order__info">Smaak: {{ donut.flavour }}</p>
            <p class="order__info">Glazuur: {{ donut.glaze }}</p>
            <p class="order__info">Topping: {{ donut.topping }}</p>
            <p class="order__info order__info__logo">Logo: {{ donut.logo }}</p>
            <a class="btn btn--order" href="#">Start productie</a>
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
    border-radius: 30px;
    display: block;
    text-align: center;

}

.btn--active{
    color: #F1E856;
    background-color: #E72C70;
}

.btn--complete{
    border: none;
}

.btn--controls{
    margin: 0 4px;
    display: block;
}

.orders ul{
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 0;
}

.order{
    list-style: none;
    margin: 15px;
    padding: 20px;
    box-shadow: 4px 4px 30px 3px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    width: 220px;
    height: 470px;
}

.order__image{
    width: 190px;
    height: auto;
    padding: 17px;
}

.order__title{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 2em;
    margin: 0;
}

.order__creator{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 1.3em;
    margin: 4px 0;
}

.order__date{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin: 4px 0;
    color: rgb(180, 180, 180);
}

.order__info{
    font-family: 'Dosis', sans-serif;
    font-size: 1em;
    color: #E72C70;
    line-height: 7px;
}

.order__info__logo{
    margin-bottom: 20px;
}

@media (min-width: 375px) {
    .btn{
        font-size: 1.2em;
        padding: 12px 22px;
        display: block;
        text-align: center;
    }
    .order ul{
        margin-top: 100px;
    }
    .order{
        height: 490px;
    }
    
}
</style>