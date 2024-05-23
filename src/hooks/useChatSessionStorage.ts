import { useState, useEffect } from 'react';

import { ChattingList } from '@/utils/transformDataToMessages';

export interface ChattingSessionStorage {
  questionCount: number;
  chattingId: string;
  chattingList: ChattingList[];
}

const initialValue: ChattingSessionStorage = {
  questionCount: 0,
  chattingId: '',
  chattingList: [],
};

export const useChatSessionStorage = (category: string) => {
  const [categoryValue, setCategoryValue] = useState<ChattingSessionStorage>(() => {
    if (!category) {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(`selpiece-chat-${category}`);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (category) {
      try {
        window.sessionStorage.setItem(`selpiece-chat-${category}`, JSON.stringify(categoryValue));
      } catch (error) {
        console.error(error);
      }
    }
  }, [category, categoryValue]);

  const setQuestionCount = (count: number) => {
    setCategoryValue((prev) => ({ ...prev, questionCount: count }));
  };

  const setChattingId = (chatId: string) => {
    setCategoryValue((prev) => ({ ...prev, chattingId: chatId }));
  };

  const setChattingList = (chatting: ChattingList[]) => {
    setCategoryValue((prev) => ({ ...prev, chattingList: chatting }));
  };

  const updateChattingList = (updateFunction: (prevChatting: ChattingList[]) => ChattingList[]) => {
    setCategoryValue((prev) => ({ ...prev, chattingList: updateFunction(prev.chattingList) }));
  };

  return {
    categoryValue,
    setQuestionCount,
    setChattingId,
    setChattingList,
    updateChattingList,
  } as const;
};
