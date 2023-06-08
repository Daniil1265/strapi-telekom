<template>
    <h2 class="d-flex justify-content-center" style="font-size: 1.5rem; font-weight: bold; margin: 20px; ">
        Список услуг </h2>
    <Services v-bind:services="content" />


</template>

<script>
import ServiceService from '../../services/service.service';
import Services from '../Service/Services.vue';



export default {
    name: "ServiceList",
    data() {
        return {
            content: {},
            errors: {},
        };
    },
    compinents: { Services },
    mounted() {
        if (ServiceService.getPublicContent()) {
            ServiceService.getPublicContent().then((response) => {
                this.content = response.data.data;
                console.log(this.content);
            }, (error) => {
                this.error =
                    (error.response &&
                        error.response.data.data &&
                        error.response.data.datamessage) ||
                    error.message ||
                    error.toString();
            })
        }


    },
    components: { Services }
};
</script>

<style>
.carousel-inner img {
    margin: 0 auto;
}
</style>
