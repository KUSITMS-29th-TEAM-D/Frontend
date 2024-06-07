import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ResultView } from '@/components/DefineResultPage/ResultView';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { userService } from '@/services/UserService';
import { DefineResult } from '@/types/test.type';

export const DefineResultView = () => {
  const [defineResult, setDefineResult] = useState<DefineResult | null>(null);

  useEffect(() => {
    if (userService.getUserState() === 'MEMBER') {
      personaAPI.getDefineMember().then((res) => {
        setDefineResult(res.payload);
      });
    }
  }, []);

  if (defineResult)
    return (
      <StyledContainer>
        <ResultView result={defineResult} showRetestButton={false} />
      </StyledContainer>
    );

  return <NoResultSection tab="Define" />;
};

const StyledContainer = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.white} 0%, ${theme.color.primary100} 100%)`};

  width: 100%;
  padding: 0 64px 40px 64px;
`;
