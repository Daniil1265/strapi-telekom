<template>
    <YandexMap :settings="settings" :coordinates="cordCenter" map-type="map">

        <YandexMarker v-for="cordinfo in json" :key="cordinfo.Markerid"
            :coordinates="cordinfo.Cells.geoData.coordinates" :marker-id=cordinfo.Markerid>
        </YandexMarker>
    </YandexMap>
</template>
  
<script setup>

/* eslint-disable */

import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import addresses from './addresses'


const settings = {
    apiKey: '', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
}

const cordCenter = [55.7522, 37.6156];


const json = addresses

</script>
  
<style>
.yandex-container {
    height: 300px;
}
</style>