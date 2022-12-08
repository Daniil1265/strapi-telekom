import { createStore } from "vuex";
import { auth } from "./auth.module";
import { tariff } from "./tariff.module";


const store = createStore({
    modules: {
        auth, tariff,
    },
});

export default store;
