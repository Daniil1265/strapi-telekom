<template>
    <div>
        <h2>{{ content.tariffTitle }}</h2>
        <p>Описание: {{ content.tariffDescription }}</p>
        <p>Скорость: {{ content.tariffSpeed }}</p>
        <p><i>{{ content.tariffPrice }}</i> руб</p>
        <button v-on:click="() => goAuth()" v-if="this.user?.tariff === undefined">Авторизуйтесь</button>
        <button v-on:click="() => handleConnectTariff()" v-else-if="tariffId !== this.user?.tariff.id">Заказать</button>
        <span v-else-if="this.user?.tariff.id == tariffId">Подключен</span>
        <span v-else>Что-то пошло не так</span>



    </div>
</template>
<script>

import TariffService from '../../services/tariff.service';

export default {


    methods: {
        goAuth() {
            this.$router.push("/login");
        },
        handleConnectTariff() {
            TariffService.connectTariff(this.tariffId)
            this.$router.go();




        }

    },
    data() {

        return {
            content: this.tariff.attributes,
            tariffId: this.tariff.id,

        };
    },
    props: ["tariff", "user"]

}
</script>
<style>

</style>