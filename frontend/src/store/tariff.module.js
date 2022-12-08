import axios from "axios";
import authHeader from '../services/auth-header';


const API_URL = 'http://localhost:1337/api/';
export const tariff = ({
    actions: {
        async fetchTariffs({ commit }) {
            try {
                const tariff = await axios.get(
                    API_URL + "users/me?populate=tariff", {
                    headers: authHeader()
                },

                );
                commit("SET_TARIFF", tariff.tariff);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    state: {
        tariff: [],
    },
    getters: {
        getTariff: (state) => state.tariff,
    },

    mutations: {
        SET_TARIFF(state, tariff) {
            state.tariff = tariff;
        },
    },
});


