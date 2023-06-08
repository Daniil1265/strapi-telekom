<template>

    <h2 class="d-flex justify-content-center" style="font-size: 1.5rem; font-weight: bold; margin-top: 10px; ">
        Главная страница с тарифами </h2>
    <Tariffs v-bind:tariffs="content" />
    <h2 class="d-flex justify-content-center" style="font-size: 1.5rem; font-weight: bold; margin-top: 10px; ">
        Карата подключений </h2>
    <YandexMap />

</template>

<script>
import UserService from "../../services/user.service";
import Tariffs from '../Tariffs/Tariffs.vue';
import YandexMap from '../Map/YandexMap.vue';


export default {
    name: "Home",
    data() {
        return {
            content: {},
            errors: {},
        };
    },
    compinents: { Tariffs },
    mounted() {
        UserService.getPublicContent().then((response) => {
            this.content = response.data.data;
        }, (error) => {
            this.error =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        });
    },
    components: { Tariffs, YandexMap }
};
</script>

<style>

</style>
