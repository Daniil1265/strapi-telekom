<template>
    <div class="container" style="margin-top: 10px;">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title mb-4">
                            <div class="userData ml-3">
                                <h2 class="d-flex justify-content-center" style="font-size: 1.5rem; font-weight: bold">
                                    Личный кабинет
                                    пользователя</h2>
                            </div>
                            <div class="d-flex justify-content-center" style="padding-top: 15px;">

                                <div class="image-container">
                                    <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                        class="profile-img-card"
                                        style="width: 96px; height: 96px; border-radius: 50%;" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="basicInfo-tab" data-toggle="tab"
                                            href="#basicInfo" role="tab" aria-controls="basicInfo"
                                            aria-selected="true">Общая информация</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="connectedServices-tab" data-toggle="tab"
                                            href="#connectedServices" role="tab" aria-controls="connectedServices"
                                            aria-selected="false">Тарифы и Услуги</a>
                                    </li>
                                </ul>
                                <div class="tab-content ml-1" id="myTabContent">
                                    <div class="tab-pane fade show active" id="basicInfo" role="tabpanel"
                                        aria-labelledby="basicInfo-tab">


                                        <div class="row">
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Имя</label>
                                            </div>
                                            <div class="col-md-8 col-6">
                                                <p>{{ currentUser.nickname }}</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div class="row">
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">E-mail</label>
                                            </div>
                                            <div class="col-md-8 col-6">
                                                <p>{{ currentUser.email }}</p>

                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                    <div class="tab-pane fade" id="connectedServices" role="tabpanel"
                                        aria-labelledby="ConnectedServices-tab">
                                        <div class="row">
                                            <div class="col-12">

                                                <label style="font-weight:bold;">Ваш тариф</label>
                                                <p>
                                                    <span v-if="currentTariff === null">Вы не подключены к
                                                        тарифу</span>
                                                    <span v-else-if="currentTariff?.id === undefined">Загрузка...</span>

                                                    <span class="d-flex justify-content-between" v-else><span>{{
                                                            currentTariff?.tariffTitle
                                                    }}</span>
                                                        <span>{{ currentTariff?.tariffPrice }} руб</span></span>
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
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
            return this.$store.state.tariff.tariff.data?.tariff;

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