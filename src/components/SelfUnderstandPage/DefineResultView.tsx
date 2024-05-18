import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { DefineResult } from '@/types/test.type';

export const DefineResultView = () => {
  const [defineResult, setDefineResult] = useState<DefineResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await personaAPI.getPersonaMember();
      if (result) {
        setDefineResult(result);
      }
    };

    fetchData();
  }, []);

  if (defineResult) return null;

  return <NoResultSection tab="Define" />;
};
