import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1337/api/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'tariffs');
    }

    getUserBoard() {
        console.log(authHeader());
        return axios.get(API_URL + 'users/me', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
