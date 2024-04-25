import axios from 'axios';

import { LoginResponseData, LoginResult } from './LoginTypes';

export const login = async (): Promise<LoginResult> => {
  try {
    const res = await axios.post<LoginResponseData>(
      `${process.env.OAUTH_KAKAO_REDIRECT_URI}/api/`,
      {}
    );
    const { accessToken, refreshToken, cur_time } = res.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('expiredTime', cur_time);
    axios.defaults.headers.common['x-access-token'] = accessToken;

    return { accessToken, refreshToken, expiredTime: cur_time, error: null };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message ?? 'error1';
      return {
        accessToken: null,
        refreshToken: null,
        expiredTime: null,
        error: message,
      };
    }
    return {
      accessToken: null,
      refreshToken: null,
      expiredTime: null,
      error: 'error2',
    };
  }
};
