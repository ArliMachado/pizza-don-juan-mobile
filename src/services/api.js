import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { TOKEN_KEY, onSignOut } from './auth';

const baseUrlHome = 'http://192.168.1.107:3333';
// const baseUrlJob = 'http://10.168.69.163:3333';

const api = axios.create({
  baseURL: baseUrlHome,
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    if (!token) {
      onSignOut();
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.tron.log(err);
  }
  return config;
});

export default api;
