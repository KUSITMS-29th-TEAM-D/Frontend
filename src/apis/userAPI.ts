import { authClient, noAuthClient } from '@/apis/client';
import { ReRegisterRequest, RegisterRequest } from '@/types/userAPI.type';

export const userAPI = {
  // 신규 유저 등록
  register: async (userInfo: RegisterRequest) => {
    const response = await authClient.post('/api/users/register', userInfo);
    return response.data;
  },
  // 닉네임 중복 체크
  duplicateCheck: async (nickname: string) => {
    const response = await noAuthClient.get(`/api/users/check-nickname/${nickname}`);
    return response.data;
  },
  // 유저 정보 조회
  getUserInfo: async () => {
    const response = await authClient.get('/api/users/infos');
    return response.data;
  },
  // 유저 정보 수정
  updateUserInfo: async (userInfo: ReRegisterRequest) => {
    const response = await authClient.patch('/api/users/infos', userInfo);
    return response.data;
  },
  // 로그아웃
  logout: async () => {
    const response = await noAuthClient.post('/api/users/logout');
    return response.data;
  },
};
