import { noAuthClient } from '@/apis/client';

export const tokenAPI = {
  refresh: async () => {
    const response = await noAuthClient.get('/api/reissue/access-token');
    return response.data;
  },
};
