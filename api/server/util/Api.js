import axios from 'axios';

const API = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    timeout: 1000
});

export default API