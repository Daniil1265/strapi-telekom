<template>
    <div class="container">
        <header class="jumbotron">
            <h3> Здравствуйте, {{ content.nickname }}</h3>
        </header>
        <p>
            <strong>Ваш тариф:</strong>
            <span v-if="content.tariff === undefined">Загрузка</span>
            <span v-if="content.tariff === null">Вы не подключены к тарифу </span>
            {{ content.tariff?.tariffTitle }}
        </p>
    </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
    name: "User",

    data() {
        return {
            content: {},

        };
    },
    mounted() {
        UserService.getUserBoard().then((response) => {
            this.content = response.data;
        }, (error) => {
            this.error =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        })


    },
};
</script>
