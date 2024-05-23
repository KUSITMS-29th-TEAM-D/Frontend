import { authClient, noAuthClient } from '@/apis/client';
import { CATEGORY_TYPE } from '@/constants/discover';
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
  getChattingComplete: async () => {
    const response = await authClient.get('/api/personas/discover/complete');
    return response.data;
  },
  // Discover 임시저장 채팅 조회
  getDefaultChatting: async (category: string) => {
    const response = await authClient.get(
      `/api/personas/discover/chattings?category=${CATEGORY_TYPE[category].title}`
    );
    return response.data;
  },
  // Discover 임시저장 요약 조회
  getDefaultSummary: async () => {
    const response = await authClient.get('/api/personas/discover/summaries');
    return response.data;
  },
  // Discover 질문 받기
  getQuestion: async (category: string) => {
    const response = await authClient.get(
      `/api/personas/discover/question?category=${CATEGORY_TYPE[category].title}`
    );
    return response.data;
  },
  // Discover 질문 답변하기
  postAnswer: async (chattingId: string, answer: string) => {
    const response = await authClient.post('/api/personas/discover/answer', {
      chatting_id: chattingId,
      answer,
    });
    return response.data;
  },
  // Discover 초기화
  resetChatting: async (category: string) => {
    const response = await authClient.post('/api/personas/discover/reset', {
      category: CATEGORY_TYPE[category].title,
    });
    return response.data;
  },

  // Discover 페르소나 키워드 전체 조회
  getDiscoverAllKeyword: async () => {
    const response = await authClient.get('/api/personas/discover/all-keywords');
    return response.data;
  },

  // Discover 페르소나 키워드 카테고리별 조회
  getDiscoverCategoryKeyword: async (category: string) => {
    const response = await authClient.get(
      `/api/personas/discover/keywords?category=${CATEGORY_TYPE[category].title}`
    );
    return response.data;
  },
};
