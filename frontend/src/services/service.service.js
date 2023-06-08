import axios from 'axios';

const API_URL = 'http://192.168.0.212:1337/api/';

class ServiceService {
    getPublicContent() {
        return axios.get(API_URL + 'services');
    }

}

export default new ServiceService();
