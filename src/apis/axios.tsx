import axios, { AxiosInstance } from 'axios';
import { useCookies } from 'react-cookie';

import { useRefreshTokens } from '@/apis/refreshToken';

const Axios: AxiosInstance = axios.create({
  baseURL: 'http://url',
});

Axios.interceptors.request.use(
  async (config) => {
    const { getAcessToken } = useRefreshTokens();
    await getAcessToken();
    const [cookies] = useCookies(['token']);

    const token = cookies.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios;
