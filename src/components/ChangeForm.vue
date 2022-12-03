<script setup>
    import {ref} from 'vue'

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
    }
</style>