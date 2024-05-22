import { useState, useEffect } from 'react';

import { ChattingData } from '@/types/test.type';

export const useChatSessionStorage = (category: string, initialValue: ChattingData | null) => {
  const [storedValue, setStoredValue] = useState<ChattingData>(() => {
    if (category !== '') {
      try {
        const item = window.sessionStorage.getItem(`selpiece-${category}`);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }
  });

  useEffect(() => {
    if (category !== '') {
      try {
        window.sessionStorage.setItem(`selpiece-${category}`, JSON.stringify(storedValue));
      } catch (error) {
        console.error(error);
      }
    }
  }, [category, storedValue]);

  return [storedValue, setStoredValue] as const;
};
