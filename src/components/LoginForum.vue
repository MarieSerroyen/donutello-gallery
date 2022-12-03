<script setup>



</script>

<template>
    <div class="login">
        <h1 class="login__title">Personeel log in</h1>

        <form class="login__form">
            <label class="login__label" for="mail">E-mailadres</label>
            <input class="login__input" type="text" id="mail" v-model="mail" required>

            <label class="login__label" for="password">Wachtwoord</label>
            <input class="login__input" type="password" id="password" v-model="password" required>

            <button class="login__button" type="submit">Inloggen</button>
        </form>
    </div>
 
</template>

<style scoped>
    .login__title {
        font-size: 4rem;
    }

    .login__form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>