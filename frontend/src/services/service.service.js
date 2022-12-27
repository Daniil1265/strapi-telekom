import axios from 'axios';

const API_URL = 'http://localhost:1337/api/';

class ServiceService {
    getPublicContent() {
        return axios.get(API_URL + 'services');
    }

}

export default new ServiceService();
