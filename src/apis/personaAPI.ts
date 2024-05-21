import { authClient, noAuthClient } from '@/apis/client';
import { DefineRequest, DesignRequest } from '@/types/test.type';

export const personaAPI = {
  // Define 페르소나 생성
  registerDefine: async (member: boolean, userInfo: DefineRequest) => {
    if (member) {
      const response = await authClient.post('/api/personas/define', userInfo);
      return response.data;
    }

    const response = await noAuthClient.post('/api/personas/define/sharing', userInfo);
    return response.data;
  },
  // 비로그인 유저 Define 페르소나 조회
  getDefine: async (personaId: string) => {
    const response = await noAuthClient.get(
      `/api/personas/define/sharing?define_persona_id=${personaId}`
    );
    return response.data;
  },
  // 로그인 유저 Define 페르소나 조회
  getDefineMember: async () => {
    const response = await authClient.get('/api/personas/define');
    return response.data;
  },

  // Design 설계하기 페르소나 등록
  registerDesign: async (userInfo: DesignRequest) => {
    const response = await authClient.post('/api/personas/design', userInfo);
    return response.data;
  },
  // Design 설계하기 페르소나 조회
  getDesignMember: async () => {
    const response = await authClient.get('/api/personas/design');
    return response.data;
  },

  // Discover 임시저장 채팅 완료 여부 조회

  // Discover 임시저장 채팅 조회
  getDefaultChatting: async (category: string) => {
    const response = await authClient.get(`/api/personas/discover/chattings?category=${category}`);
    return response.data;
  },
  // Discover 임시저장 요약 조회
  getDefaultSummary: async () => {
    const response = await authClient.get('/api/personas/discover/summaries');
    return response.data;
  },
};
