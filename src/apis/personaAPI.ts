import { authClient, noAuthClient } from '@/apis/client';
import { DefineRequest, DesignRequest } from '@/types/test.type';

export const personaAPI = {
  // 페르소나 생성
  register: async (member: boolean, userInfo: DefineRequest) => {
    if (member) {
      const response = await authClient.post('/api/personas/define', userInfo);
      return response.data;
    }

    const response = await noAuthClient.post('/api/personas/define', userInfo);
    return response.data;
  },
  // 비로그인 유저 페르소나 조회
  getPersona: async (personaId: string) => {
    const response = await noAuthClient.get(
      `/api/personas/define/sharing?define_persona_id=${personaId}`
    );
    return response.data;
  },
  // 로그인 유저 페르소나 조회
  getPersonaMember: async () => {
    const response = await authClient.get('/api/personas/define');
    return response.data;
  },
};

export const designPersonaAPI = {
  // 페르소나 생성
  register: async (member: boolean, userInfo: DesignRequest) => {
    if (member) {
      const response = await authClient.post('/api/personas/design', userInfo);
      return response.data;
    }

    const response = await noAuthClient.post('/api/personas/design', userInfo);
    return response.data;
  },
};
