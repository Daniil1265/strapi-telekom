<template>
    <div class="tariffs">
        <p v-if="tariffs.length === 0">Тарифов нет</p>
        <Tariff v-for="tariff in tariffs" :key="tariff.id" v-bind:tariff="tariff" v-bind:user="user" />
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
.tariffs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>