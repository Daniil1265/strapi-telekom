import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://192.168.0.212:1337/api/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'tariffs');
    }



    getUserBoard() {

        if (authHeader().Authorization) {
            return axios.get(API_URL + 'users/me?populate=tariff', { headers: authHeader() })
        } else {
            this.getPublicContent();
        }

    }


}

export default new UserService();
