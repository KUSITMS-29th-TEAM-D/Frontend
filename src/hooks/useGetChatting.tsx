import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { useChatSessionStorage } from '@/hooks/useChatSessionStorage';
import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

export const useGetChatting = (category: string) => {
  const [data, setData] = useChatSessionStorage(category, null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [chatList, setChatList] = useState<ChattingList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data === null && category !== '') {
        try {
          const res = await personaAPI.getDefaultChatting(category);
          setData(res.payload);
          setChatList(transformDataToMessages(res.payload));
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

  return { data, chatList, loading, error };
};
