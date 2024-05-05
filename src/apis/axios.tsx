import axios from 'axios';

interface RefreshToken {
  getCookie: (name: string) => string | undefined;
  refreshToken: () => Promise<void>;
}

export const Axios = axios.create({
  baseURL: 'http://url',
});

export const axiosInterceptor = (tokenRefresher: RefreshToken) => {
  Axios.interceptors.request.use(
    async (config) => {
      const accessToken = tokenRefresher.getCookie('accessToken');
      if (!accessToken) {
        console.info('액세스 토큰 없음');
        await tokenRefresher.refreshToken();
        config.headers.Authorization = `Bearer ${tokenRefresher.getCookie('accessToken')}`;
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};
