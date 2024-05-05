import axios, { AxiosInstance } from 'axios';

interface RefreshToken {
  getCookie: () => string | undefined;
  refreshToken: () => Promise<void>;
}

const Axios: AxiosInstance = axios.create({
  baseURL: 'http://url',
});

const tokenRefresher: RefreshToken = {
  getCookie() {
    return '';
  },
  async refreshToken() {},
};

Axios.interceptors.request.use(
  async (config) => {
    const accessToken = tokenRefresher.getCookie();
    if (!accessToken) {
      console.info('액세스 토큰 없음');
      await tokenRefresher.refreshToken();
      config.headers.Authorization = `Bearer ${tokenRefresher.getCookie()}`;
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios;
