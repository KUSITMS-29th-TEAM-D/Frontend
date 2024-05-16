import { authClient } from '@/apis/client';
import { RegisterRequest } from '@/types/userAPI.type';

export const userAPI = {
  // 신규 유저 등록
  register: async (userInfo: RegisterRequest) => {
    const response = await authClient.post('/api/users/register', userInfo);
    return response.data;
  },
};
