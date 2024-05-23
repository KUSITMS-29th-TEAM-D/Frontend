import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { personaAPI } from '@/apis/personaAPI';
import { discoverSummaryState } from '@/recoil/discoverSummaryState';

export const useGetDefaultChatSummary = () => {
  const [data, setData] = useRecoilState<{ [key: string]: string[] }>(discoverSummaryState);
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
