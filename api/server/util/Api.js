import axios from 'axios';

const API = axios.create({
    baseURL: 'http://viacep.com.br/ws',
    timeout: 1000,
    headers: {
        'User-Agent':''
    }
});

export default API