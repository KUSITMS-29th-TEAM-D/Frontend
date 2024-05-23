import { useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';

export const usePostAnswerChat = (chattingId: string, answer: string) => {
  const [data, setData] = useState<{ reaction: string; summary: string } | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const postAnswer = async () => {
    setLoading(true);
    try {
      const res = await personaAPI.postAnswer(chattingId, answer);
      setData(res.payload);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { postAnswer, data, loading, error };
};
