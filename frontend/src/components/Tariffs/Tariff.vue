<template lang="ru">
    <div>
        <h2>{{  content.tariffTitle  }}</h2>
    <p>Discription: {{  content.tariffDescription  }}</p>
    <p>скорость: {{  content.tariffSpeed  }}</p>
    <p><i>{{  content.tariffPrice  }}</i> руб</p>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: this.tariff.attributes,
        };
    },
    props: ["tariff"]

}
</script>
<style>

</style>