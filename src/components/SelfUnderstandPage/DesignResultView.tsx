import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { ResultView } from '@/components/DesignResultPage/ResultView';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { DesignResult } from '@/types/test.type';

export const DesignResultView = () => {
  const [persona, setPersona] = useState<DesignResult | null>(null);

  useEffect(() => {
    personaAPI.getPersonaDesign().then((res) => {
      setPersona(res.data.payload);
    });
  }, []);

  if (persona) return <ResultView style={{ height: '644px' }} definition={persona.definition} />;

  return <NoResultSection tab="Design" />;
};
