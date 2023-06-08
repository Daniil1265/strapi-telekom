import axios from "axios";
import authHeader from '../services/auth-header';


const API_URL = 'http://192.168.0.212:1337api/';
export const tariff = ({
    actions: {
        async fetchTariffs({ commit }) {
            try {
                const tariff = await axios.get(
                    API_URL + "users/me?populate=tariff", {
                    headers: authHeader()
                },

                );
                commit("SET_TARIFF", tariff);
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


