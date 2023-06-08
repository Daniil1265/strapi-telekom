<template>
    <div id="app">
        <nav class="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
            <!-- navbar-expand-lg - set large breakpoint -->
            <router-link to="/" class="navbar-brand">Главная</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/service" class="nav-link">Услуги</router-link>
                    </li>
                </ul>

                <ul v-if="!currentUser" class="navbar-nav ml-auto">
                    <li class="nav-item"> <!--  add dpordown for auth in breakpoint? -->
                        <router-link to="/register" class="nav-link">
                            <font-awesome-icon icon="user-plus" /> Регестрация
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">
                            <font-awesome-icon icon="sign-in-alt" /> Вход
                        </router-link>
                    </li>
                </ul>

                <ul v-if="currentUser" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">
                            <font-awesome-icon icon="user" />
                            {{ currentUser.nickname }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="logOut">
                            <font-awesome-icon icon="sign-out-alt" /> Выход
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>

export default {
    created() {
        // Setting Language in the HTML document
        document.documentElement.setAttribute('lang', 'ru')
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
};
</script>
