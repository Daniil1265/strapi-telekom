<template>

    <tbody>
        <tr>
            <th scope="row">{{ serviceId }}</th>
            <td>{{ content.serviceTitle }}</td>
            <td>{{ content.serviceDicription }}</td>
            <td>{{ content.servicePrice }}, руб</td>
        </tr>
    </tbody>

</template>
<script>



export default {


    data() {

        return {
            content: this.service.attributes,
            serviceId: this.service.id,

        };
    },
    props: ["service"]

}
</script>
<style>

</style>