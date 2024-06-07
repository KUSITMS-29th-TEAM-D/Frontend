import { noAuthClient } from '@/apis/client';

export const getAccessToken = async () => {
  try {
    const response = await noAuthClient.get('/api/reissue/access-token');
    return response.data;
  } catch (error) {
    console.error('Access Token 갱신 실패:', error);
    throw error;
  }
};
