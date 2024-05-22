import { authClient, noAuthClient } from '@/apis/client';

export const programAPI = {
  // 메인 홈 자기이해 프로그램 조회
  getUnderstanding: async (start: number, end: number, programForm: string) => {
    const requestInformation = {
      startPrice: start,
      endPrice: end === 0 ? null : end,
      form: programForm.replace('·', ''),
    };

    const response = await authClient.post(
      '/api/programs/home/self-understanding',
      requestInformation
    );
    return response.data;
  },
  // 메인 홈 브랜딩 프로그램 조회
  getBranding: async (interest: string[], imageKeywords: string[]) => {
    const requestInformation: { [key: string]: string[] } = {};

    if (interest.length > 0) {
      requestInformation.interest = interest;
    }

    if (imageKeywords.length > 0) {
      requestInformation.imageKeywords = imageKeywords;
    }

    const response = await authClient.post('/api/programs/home/branding', requestInformation);
    return response.data;
  },
  // 메인 홈 브랜딩 프로그램 조회 (비로그인)
  getBrandingNonLogin: async (interest: string[], imageKeywords: string[]) => {
    const requestInformation: { [key: string]: string[] } = {};

    if (interest.length > 0) {
      requestInformation.interest = interest;
    }

    if (imageKeywords.length > 0) {
      requestInformation.imageKeywords = imageKeywords;
    }

    const response = await noAuthClient.post(
      '/api/programs/branding/non-login',
      requestInformation
    );
    return response.data;
  },
  // 프로그램 상세페이지 조회
  getProgramDetail: async (type: string, id: string) => {
    const response = await authClient.get(`/api/programs/${type}/${id}`);
    return response.data;
  },
  // 프로그램 신청
  applyProgram: async (type: string, programId: string) => {
    const response = await authClient.post(`/api/programs/apply`, {
      type,
      programId,
    });
    return response.data;
  },
};
