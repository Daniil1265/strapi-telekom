<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Страница с тарифами</h3>
        </header>
        <Tariffs v-bind:tariffs="content" />
    </div>
</template>

<script>
import UserService from "../services/user.service";
import Tariffs from './Tariffs/Tariffs.vue';

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
    components: { Tariffs }
};
</script>
