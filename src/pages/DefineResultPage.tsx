import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ResultView } from '@/components/DefineResultPage/ResultView';
import { DefineResult } from '@/types/test.type';

export const DefineResultPage = () => {
  const { defineId } = useParams();
  const [defineResult, setDefineResult] = useState<DefineResult | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    personaAPI
      .getDefine(defineId || '')
      .then((res) => {
        setDefineResult(res.payload);
      })
      .catch(() => {
        navigate('test/define');
      });
  }, []);

  // TODO: 로딩 화면 만들기
  if (!defineResult) return <StyledLoading>로딩 중</StyledLoading>;

  return (
    <StyledContainer>
      <ResultView result={defineResult} />
    </StyledContainer>
  );
};

const StyledLoading = styled.div`
  //height: var(--full-height);
  height: 100vh;
  padding-top: 90px;
  padding-left: 20px;
`;

const StyledContainer = styled.section`
  //min-height: var(--full-height);
  min-height: 100vh;
  padding: 76px 64px 40px 64px;

  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.white} 0%, ${theme.color.primary100} 100%)`};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px;
    padding-top: 60px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 24px;
    padding-top: 60px;
  }
`;
