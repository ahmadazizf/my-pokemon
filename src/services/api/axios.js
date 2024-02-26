import axios from 'axios';
import { BASE_URL } from './path';

const headers = {
    Accept: 'application/json',
    'content-type': 'application/json'
}

const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers
})

export default api