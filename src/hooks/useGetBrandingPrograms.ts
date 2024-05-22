import { useEffect, useState } from 'react';

import { programAPI } from '@/apis/programAPI';
import { useDebounce } from '@/hooks/useDebounce';
import { RecommendProgramItem } from '@/types/program.type';

export const useGetBrandingPrograms = (interest: string[], keyword: string[]) => {
  const [data, setData] = useState<RecommendProgramItem[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedInterest = useDebounce(interest, 1000);
  const debouncedKeyword = useDebounce(keyword, 1000);

  useEffect(() => {
    programAPI
      .getBranding(debouncedInterest, debouncedKeyword)
      .then((response) => {
        setData(response.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [debouncedInterest, debouncedKeyword]);

  return { data, loading, error };
};
