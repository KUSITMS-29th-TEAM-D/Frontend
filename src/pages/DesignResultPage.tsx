import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { personaAPI } from '@/apis/personaAPI';
import { ResultView } from '@/components/DesignResultPage/ResultView';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DesignResult } from '@/types/test.type';

export const DesignResultPage = () => {
  const [persona, setPersona] = useState<DesignResult | null>(null);
  const navigate = useNavigate();

  // API 호출
  useEffect(() => {
    personaAPI.getPersonaDesign().then((res) => {
      setPersona(res.payload);
    });
  }, []);

  if (persona)
    return (
      <ResultView style={{ minHeight: '100vh' }} definition={persona.definition}>
        <PlainButton
          variant="gray"
          width="597px"
          height="48px"
          onClick={() => navigate('/test/design/1')}
        >
          다시 설정하기
        </PlainButton>
      </ResultView>
    );

  return null;
};
