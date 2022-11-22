<template lang="ru">
    <div class="tariffs">
        <p v-if="tariffs.length===0">Тарифов нет</p>
        <Tariff v-for="tariff in tariffs" v-bind:tariff="tariff"/>
    </div>
    
   
</template>
<script>
import Tariff from './Tariff.vue';
export default {
    components: { Tariff },
    props: ["tariffs"],

}

</script>
<style scoped>
.tariffs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>