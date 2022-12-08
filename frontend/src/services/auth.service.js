import axios from 'axios';

const API_URL = 'http://localhost:1337/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth/local', {
                identifier: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.jwt) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;


            });

    }

    logout() {
        localStorage.removeItem('user');
    }


    register(user) {
        return axios.post(API_URL + 'auth/local/register', {
            username: user.email,
            email: user.email,
            nickname: user.nickname,
            password: user.password
        });
    }
}

export default new AuthService();
