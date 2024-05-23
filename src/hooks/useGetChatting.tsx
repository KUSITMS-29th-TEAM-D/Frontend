import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { useChatSessionStorage } from '@/hooks/useChatSessionStorage';
import { ChattingData } from '@/types/test.type';
import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

export const useGetChatting = (category: string, endCategory: string[]) => {
  //const [data, setData] = useChatSessionStorage(category, null);
  const [data, setData] = useState<ChattingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [init, setInit] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [chatList, setChatList] = useState<ChattingList[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('하나');
    const fetchData = async () => {
      if (data === null && category !== '') {
        try {
          const res = await personaAPI.getDefaultChatting(category);
          setData(res.payload);
          setChatList(transformDataToMessages(res.payload));
          setCount(Object.keys(res.payload).length);
        } catch (error) {
          window.alert('채팅을 불러오는데 실패했습니다.');
          setError(error as Error);
        } finally {
          setLoading(false);
          setInit(true);
        }
      } else {
        setLoading(false);
        setInit(true);
      }
    };

    fetchData();
  }, [category, data, setData]);

  const updateQuestion = async (newQuestion: string) => {
    setChatList((prev) => [...prev, { type: 'question', text: newQuestion, user: 'chatbot' }]);
  };

  /* useEffect(() => {
    console.log('');
    const fetchQuestion = async () => {
      if (!endCategory.includes(category) && category !== '') {
        try {
          const res = await personaAPI.getQuestion(category);
          setChatList((prev) => [
            ...prev,
            { type: 'question', text: res.payload.question, user: 'chatbot' },
          ]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (!loading && data && chatList.length === 0) {
      fetchQuestion();
    }
  }, [category, endCategory, data, loading, chatList.length]); */

  return { data, chatList, loading, error, count, init, setData, updateQuestion };
};
