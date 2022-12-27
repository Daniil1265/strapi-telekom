<template>
    <div class="services">
        <p v-if="services.length === 0">Услуг нет</p>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название услуги</th>
                    <th scope="col">Описание услуги</th>
                    <th scope="col">Цена, руб</th>
                </tr>
            </thead>


            <Service v-for="service in services" :key="service.id" v-bind:service="service" />
        </table>

    </div>



</template>
<script>
import Service from './Service.vue';
import ServiceService from '../../services/service.service';




export default {


    mounted() {
        if (ServiceService.getPublicContent()) {
            ServiceService.getPublicContent().then((response) => {
                this.content = response.data;
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

    components: { Service },
    props: ["services"],

    data() {
        return {
            service: {},
        }
    }

}

</script>
<style scoped>

</style>