import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';

export interface ChatSummary {
  health: string[];
  career: string[];
  love: string[];
  leisure: string[];
}

export const useGetDefaultChatSummary = () => {
  const [data, setData] = useState<ChatSummary>({
    health: [],
    career: [],
    love: [],
    leisure: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    personaAPI
      .getDefaultSummary()
      .then((response) => {
        setData(response.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, setData, loading, error };
};
