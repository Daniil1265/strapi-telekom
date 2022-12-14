<template>
    <div class="card-body" style="margin: 10px;">
        <h2 class="card-title card-header" style="margin-bottom:15px">{{ content.tariffTitle }}</h2>
        <p class="card-text">Описание: {{ content.tariffDescription }}</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Скорость: <i>{{ content.tariffSpeed }}</i> мб/сек</li>
            <li class="list-group-item"><i>{{ content.tariffPrice }}</i> руб</li>
        </ul>
        <div class="card-body">
            <button class="btn btn-primary" v-on:click="() => goAuth()"
                v-if="this.user?.tariff === undefined">Авторизуйтесь</button>
            <button class="btn btn-primary" v-on:click="() => handleConnectTariff()"
                v-else-if="this.user?.tariff === null">У вас еще нет тарифов,
                закажите</button>
            <button class="btn btn-primary" v-on:click="() => handleConnectTariff()"
                v-else-if="tariffId !== this.user?.tariff.id">Заказать</button>
            <span class="btn btn-primary  disabled btn btn-success" aria-disabled="true"
                v-else-if="this.user?.tariff.id == tariffId">Подключен</span>
            <span v-else>Что-то пошло не так</span>
        </div>
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