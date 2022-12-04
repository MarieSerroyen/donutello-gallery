<script setup>
    import {ref} from 'vue'

    let mail = ref('');
    let password = ref('');
    let error = ref('');

    const login = () => {
        fetch("https://donuttello-api-team6.onrender.com/api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mail: mail.value,
                password: password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "success") {
                let token = data.data.token
                let id = data.data.id

                localStorage.setItem("token", token)
                localStorage.setItem("id", id)
                
                window.location.href = "index.html"
            }
            if (data.status === "error") {
                error.value = data.message;
            }
        })    
    }

</script>

<template>
    <div class="login">
        <h1 class="login__title">Personeel log in</h1>

        <form class="login__form">
            <label class="login__label" for="mail">E-mailadres</label>
            <input class="login__input" type="text" id="mail" v-model="mail" required>

            <label class="login__label" for="password">Wachtwoord</label>
            <input class="login__input" type="password" id="password" v-model="password" required>
            
            <p class="form__error" id="error">{{ error }}</p>

            <button class="login__button btn btn--active" type="submit" @click.prevent="login">Inloggen</button>
        </form>
    </div>
 
</template>

<style scoped>
    .login {
        font-family:'Dosis', sans-serif;
    }
    .login__title {
        font-size: 2rem;
        padding-top: 140px;
        padding-left: 12px;
        text-align: left;
    }

    .login__form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }

    .login__label {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0rem;

    }

    .login__input {
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
   
    .login{
        padding: 0 30%;
    }
    
}
</style>