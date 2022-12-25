<template>
    <div class="tariffs">
        <p v-if="tariffs.length === 0">Тарифов нет</p>
        <div class="container">
            <div class="row">
                <div class="col">
                    <Tariff v-for="tariff in tariffs" :key="tariff.id" v-bind:tariff="tariff" v-bind:user="user"
                        class="card" />
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import Tariff from './Tariff.vue';
import UserService from '../../services/user.service';




export default {


    mounted() {
        if (UserService.getUserBoard()) {
            UserService.getUserBoard().then((response) => {
                this.user = response.data;
            }, (error) => {
                this.error =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            })
        }

    },

    components: { Tariff },
    props: ["tariffs"],

    data() {
        return {
            user: {},
        }
    }

}

</script>
<style scoped>

</style>