import axios from 'axios';

const baseUrlHome = 'http://192.168.1.107:3333';
const baseUrlJob = 'http://10.168.69.163:3333';

const api = axios.create({
  baseURL: baseUrlHome,
});

export default api;
