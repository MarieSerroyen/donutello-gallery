<script setup>
    import {ref, onMounted} from 'vue'

    let old_password = ref('');
    let new_password = ref('');
    let confirm_password = ref('');
    let error = ref('');

    onMounted (() => {
        let token = localStorage.getItem("token")
        if (!token) {
            window.location.href = "login.html"
        }
    })

    const changePassword = () => {
        fetch("https://donuttello-api-team6.onrender.com/api/v1/users/6389bb98c20e61e4f2ba40f2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify({
                old_password: old_password.value,
                new_password: new_password.value,
                confirm_password: confirm_password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.status === "success") {                
                window.location.href = "index.html"
            }
            if (data.status === "error") {
                error.value = data.message;
            }
        })    
    }
</script>

<template>
    <div class="password">
        <h1 class="password__title">Wijzig wachtwoord</h1>

        <form class="password__form">
            <label class="password__label" for="old_password">Oud wachtwoord</label>
            <input class="password__input" type="password" id="old_password" v-model="old_password" required>

            <label class="password__label" for="new_password">Nieuw wachtwoord</label>
            <input class="password__input" type="password" id="new_password" v-model="new_password" required>

            <label class="password__label" for="confirm_password">Nieuw wachtwoord bevestigen</label>
            <input class="password__input" type="password" id="confirm_password" v-model="confirm_password" required>
            
            <p class="form__error" id="error">{{ error }}</p>

            <button class="password__button btn btn--active" type="submit" @click.prevent="changePassword">Wijzigen</button>
        </form>
        
    </div>
 
</template>

<style scoped>
    .password {
        font-family:'Dosis', sans-serif;
    }
    .password__title {
        font-size: 2rem;
        padding-top: 110px;
        padding-left: 12px;
        text-align: left;
    }

    .password__form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }

    .password__label {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0rem;
    }

    .password__input {
        border: none;
        border-bottom: 2px solid #E72870;
        font-size: 1.2rem;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }

    .btn{
    font-family: 'Dosis', sans-serif;
    font-weight: 600;
    font-size: 1em;;
    color: #E72C70;
    border: 3px solid #E72C70;
    text-decoration: none;
    border-radius: 30px;
    font-size: 1.2em;
    padding: 10px 20px;
    margin: 0 10px;
    }

    .btn--active{
        color: #F1E856;
        background-color: #E72C70;
    }

    .form__error {
        color: red;
        font-size: 1.2rem;
        margin-top: 20px;
        font-weight: bold;
    }

    @media (min-width: 375px) {
        .btn{
        font-size: 1.2em;
        padding: 12px 22px;
        margin: 0 10px;
        }
        .password {
            padding: 0 30%;
        }
    }
</style>