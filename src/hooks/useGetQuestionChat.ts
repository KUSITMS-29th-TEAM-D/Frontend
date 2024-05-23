import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';

export const useGetQuestionChat = (category: string) => {
  const [data, setData] = useState<{ id: string; question: string } | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (category !== '') {
        try {
          const res = await personaAPI.getQuestion(category);
          setData({ id: `${res.payload.chatting_id}`, question: res.payload.question });
        } catch (error) {
          window.alert('채팅을 불러오는데 실패했습니다.');
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, data, setData]);

  return { data, loading, error };
};
