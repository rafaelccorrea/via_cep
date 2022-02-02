import axios from 'axios';

const API = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': ''
    }
});

export default API