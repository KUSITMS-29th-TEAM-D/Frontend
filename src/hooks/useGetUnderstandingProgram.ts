import { useEffect, useState } from 'react';

import { programAPI } from '@/apis/programAPI';
import { useDebounce } from '@/hooks/useDebounce';
import { RecommendProgramItem } from '@/types/program.type';

export const useGetUnderstandingPrograms = (min: number, max: number, form: string) => {
  const [data, setData] = useState<RecommendProgramItem[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedMinPrice = useDebounce(min, 1000);
  const debouncedMaxPrice = useDebounce(max, 1000);
  const debouncedForm = useDebounce(form, 1000);

  useEffect(() => {
    programAPI
      .getUnderstanding(debouncedMinPrice, debouncedMaxPrice, debouncedForm)
      .then((response) => {
        setData(response.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [debouncedMinPrice, debouncedMaxPrice, debouncedForm]);

  return { data, loading, error };
};
