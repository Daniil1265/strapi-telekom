import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1337/api/';

class TariffService {
    connectTariff(tariffId) {



        axios.put(API_URL + 'users/me', {
            "tariff": {
                "id": tariffId
            }
        }, {
            headers: authHeader()
        })
    }
}



export default new TariffService();
