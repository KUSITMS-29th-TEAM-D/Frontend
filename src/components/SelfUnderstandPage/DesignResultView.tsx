import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { ResultView } from '@/components/DesignResultPage/ResultView';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { userService } from '@/services/UserService';
import { DesignResult } from '@/types/test.type';

export const DesignResultView = () => {
  const [designResult, setDesignResult] = useState<DesignResult | null>(null);

  useEffect(() => {
    if (userService.getUserState() === 'MEMBER') {
      personaAPI.getPersonaDesign().then((res) => {
        setDesignResult(res.payload);
      });
    }
  }, []);

  if (designResult)
    return <ResultView style={{ height: '644px' }} definition={designResult.definition} />;

  return <NoResultSection tab="Design" />;
};
