import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Pages/Home.vue";
import ServiceList from "./components/Pages/ServiceList.vue"
import Login from "./components/Pages/Login.vue";
import Register from "./components/Pages/Register.vue";
import Profile from "./components/Pages/BoardsPages/Profile.vue"



const routes = [
    {
        path: "",
        name: "home",
        component: Home,
    },

    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        component: Profile,

    },

    {
        path: "/service",
        component: ServiceList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;