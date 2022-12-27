<template>
    <v-select :options="Addresses" label="Address" v-model="selected">


    </v-select>

</template>

<script>

import { Addresses } from './Map/addresses'

export default {


    name: 'VueSearch',
    components: {
        vSelect: window["vue-select"]
    },

    data() {
        return {
            Addresses
        };

    }

}

</script>

<style>
@import "vue-select/dist/vue-select.css";
</style>
