<script setup>
import { ref, onMounted, reactive } from 'vue'
    
let donutsData = reactive({ donuts: [] });

//fetch naar de api
onMounted(() => {
    let token = localStorage.getItem("token")
    if (!token) {
        window.location.href = "login.html"
    }

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
            donutsData.donut = data.data.donuts;
            
    });
    
});



const changeStatus = (event) => {
    if(event.target.innerHTML === "Start productie") {
        event.target.innerHTML = "In productie"
        fetch("https://donuttello-api-team6.onrender.com/api/v1/donuts/" + event.target.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({
                status: "In productie"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.donut.status)
        })
    } else if(event.target.innerHTML === "In productie") {
        event.target.innerHTML = "Klaar"
        fetch("https://donuttello-api-team6.onrender.com/api/v1/donuts/" + event.target.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({
                status: "Klaar"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.donut.status)
        })
    }
    
}

const deleteDonut = (event) => {
    event.preventDefault();
    fetch("https://donuttello-api-team6.onrender.com/api/v1/donuts/" + event.target.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(data => {
        event.target.parentElement.parentElement.remove()
        window.location.href = "index.html"
    })
}

const logout = () => {
    localStorage.clear();
    window.location.href = "login.html"
}

</script>

<template>
    <h1>Bestellingen</h1>
    <!-- <div class="controls">
        <a id="btnNewest" class="btn btn--controls btn--active" href="#">Nieuwste eerst</a>
        <a id="btnOldest" class="btn btn--controls" href="#">Oudste eerst</a>
    </div> -->
    <div class="orders">
      <ul >
        <li class="order" v-for="donut in donutsData.donut" :key="donutsData.donut.id">
            <a href="#" class="order--delete" v-bind:id="donut._id" @click.prevent="deleteDonut"><div class="order--delete--icon"></div></a>
            <img class="order__image" v-bind:src="donut.donutImage" alt="donut preview">
            <h2 class="order__title">{{ donut.name }}</h2>
            <p class="order__creator">{{ donut.company }}</p>
            <a class="order__email" v-bind:href="`mailto:${donut.makerMail}`" >{{ donut.makerMail }}</a>
            <p class="order__date">{{ donut.date.substring(0,10) }}</p>
            <p class="order__info">Aantal: {{ donut.amount }}</p>
            <p class="order__info">Smaak: {{ donut.base }}</p>
            <p class="order__info">Glazuur: {{ donut.glaze }}</p>
            <p class="order__info">Topping: {{ donut.topping }}</p>
            <p class="order__info order__info__logo">Logo: <a v-bind:href="donut.logo" target="_blank">{{donut.logo}}</a></p>
            <p class="order__info">Type kaartje: {{ donut.cardType }}</p>
            <p class="order__info order__info__description">Opmerking: {{ donut.description }}</p>
            <a class="btn btn--order" v-bind:id="donut._id" @click.prevent="changeStatus" href="#">{{ donut.status }}</a>
        </li>
      </ul>
    </div>

    <div class="bottom__links">
        <a href="wijzig_wachtwoord.html" class="changePassword">Wijzig wachtwoord</a>
        <a href="#" class="changePassword" @click.prevent="logout">Logout</a>
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
    background-color: #ffffff;
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
    align-items: flex-start;
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
    height: auto;
    /* height: 470px; */
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
    margin: 0 3px
}

.order__info__logo a{
    width: 100%;
    overflow: hidden;
    display: block;
    color: #E72C70;
}

.order__email{
    font-family: 'Dosis', sans-serif;
    font-size: 1em;
    color: black;
    text-decoration: none;
    margin: 0;
    display: block;
}

.order__info__description{
    margin-bottom: 20px;
}

.order--delete{
    position: absolute;
    margin-left: 180px;
    background-color: transparent;
    background-image: url('../assets/trash.png');
    background-size: 25px;
    height: 60px;
    width: 40px;
    margin-left: 180px;
    background-repeat: no-repeat;
    background-position: right;
    border: none;
    background-color: transparent;
}

.changePassword{
    font-family: 'Dosis', sans-serif;
    font-size: 1em;
    color: #E72C70;
    text-decoration: none;
    margin: 30px;
    margin-right: 60px;
    display: block;
    text-align: right;
}

.bottom__links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
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
        height: auto;
    }
    
}
</style>