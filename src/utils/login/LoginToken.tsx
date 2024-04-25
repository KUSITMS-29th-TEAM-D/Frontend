import axios from 'axios';

import { LoginResponseData } from './LoginTypes';

export const setToken = async (): Promise<boolean> => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    axios.defaults.headers.common['x-access-token'] = accessToken;
  }

  const expiredTime = localStorage.getItem('expiredTime');
  if (expiredTime) {
    const curTime = new Date().getTime();
    const diffTime = new Date(expiredTime).getTime() - curTime;
    if (diffTime < 3600000) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const res = await axios.get<LoginResponseData>(
            `${process.env.OAUTH_KAKAO_REDIRECT_URI}/api/`,
            {
              headers: {
                'x-refresh-token': refreshToken,
              },
            }
          );
          const { accessToken, cur_time } = res.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('expiredTime', cur_time);
          axios.defaults.headers.common['x-access-token'] = accessToken;
        } catch (error) {
          return false;
        }
      }
    }
  }
  return true;
};
