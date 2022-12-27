<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
            <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="nickname">Имя</label>
                        <Field name="nickname" type="text" class="form-control" />
                        <ErrorMessage name="nickname" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <Field name="email" type="email" class="form-control" />
                        <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <Field name="password" type="password" class="form-control" />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="confirmation">Повторите пароль</label>
                        <Field name="confirmation" type="password" class="form-control" />
                        <ErrorMessage name="confirmation" class="error-feedback" />
                    </div>
                    <vue-recaptcha ref="recaptcha" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" size="invisible">
                    </vue-recaptcha>

                    <div class="form-group">
                        <button class="btn btn-primary btn-block" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            Зарегестрироваться
                        </button>
                    </div>
                </div>
            </Form>

            <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    name: "Register",
    components: {
        Form,
        Field,
        ErrorMessage,
        VueRecaptcha,
    },

    data() {
        const schema = yup.object().shape({
            nickname: yup
                .string()
                .required("Введите имя")
                .min(3, "Имя должно быть хотябы из 3 букв")
                .max(50, "Имя может содержать макимум 50 символов"),
            email: yup
                .string()
                .required("Введите E-mail")
                .email("E-mail введен непраивльно")
                .max(50, "E-mail может содержать макимум 50 символов"),
            password: yup
                .string()
                .required("Введите пароль")
                .min(6, "Пароль должен содержать хотя бы 6 символов")
                .max(40, "Пароль может содержать макимум 50 символов"),
            confirmation: yup
                .string()
                .required('Повторите пароль')
                .oneOf([yup.ref('password')], 'Пароли не совпадают'),



        });

        return {
            successful: false,
            loading: false,
            message: "",
            schema,
            sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/profile");
        }
    },
    methods: {
        handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;
            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = `Регестрация пройдена успешно, ${data.user.nickname}`;
                    this.successful = true;
                    this.loading = false;

                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
        validate() {

            this.$refs.recaptcha.execute()


        },
        onCaptchaExpired() {
            this.$refs.recaptcha.reset()

        }
    },

};


</script>

<style scoped>
label {
    display: block;
    margin-top: 10px;
}

.card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
}

.card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.error-feedback {
    color: red;
}
</style>
