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
        <h1 class="password_title">Wijzig wachtwoord</h1>

        <form class="password__form">
            <label class="password__label" for="old_password">Oud wachtwoord</label>
            <input class="password__input" type="password" id="old_password" v-model="old_password" required>

            <label class="password__label" for="new_password">Nieuw wachtwoord</label>
            <input class="password__input" type="password" id="new_password" v-model="new_password" required>

            <label class="password__label" for="confirm_password">Nieuw wachtwoord bevestigen</label>
            <input class="password__input" type="password" id="confirm_password" v-model="confirm_password" required>
            
            <p class="form__error" id="error">{{ error }}</p>

            <button class="password__button" type="submit" @click.prevent="changePassword">Wijzigen</button>
        </form>
        
    </div>
 
</template>

<style scoped>
    .password {
        font-family:'Dosis', sans-serif;
    }
    .password__title {
        font-size: 3rem;
        padding-top: 130px;
        text-align: left;
    }

    .password__form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .password__label {
        font-size: 1.2rem;
        margin-top: 2rem;
        margin-bottom: 20px;
    }

    .password__input {
        border: none;
        border-bottom: 2px solid #E72870;
        font-size: 1.2rem;
        width: 50%;
        height: 40px;
        margin-bottom: 20px;
    }

    .password__button {
        background-color: #E72870;
        color: #F7E200;
        border: none;
        border-radius: 100px;
        padding: 10px 20px;
        width: 40%;
        text-transform: uppercase;
        margin-top: 50px;
        cursor: pointer;
    }

    .form__error {
        color: red;
        font-size: 1.2rem;
        margin-top: 20px;
        font-weight: bold;
    }
</style>