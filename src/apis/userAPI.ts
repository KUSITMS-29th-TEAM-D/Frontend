import { authClient, noAuthClient } from '@/apis/client';
import { RegisterRequest } from '@/types/userAPI.type';

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
};
