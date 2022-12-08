<template>
    <div class="container">
        <header class="jumbotron">
            <h3>
                Личный кабинет пользователя: <strong>{{ currentUser.nickname }}</strong>
            </h3>
        </header>

        <p>
            <strong>Id:</strong>
            {{ currentUser.id }}
        </p>
        <p>
            <strong>Email:</strong>
            {{ currentUser.email }}
        </p>
        <p>
            <strong>Тариф:</strong>
            {{ currentTariff }}
        </p>
    </div>
</template>

<script>


export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user.user;

        },
        currentTariff() {
            return console.log(this.$store.state.tariff);
        },
    },
    mounted() {
        this.$store.dispatch('fetchTariffs');
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    },



};

</script>