import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { CardSection } from '@/components/DefineResultPage/CardSection';
import { DescriptionSection } from '@/components/DefineResultPage/DescriptionSection';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefineResult } from '@/types/test.type';

export const DefineResultPage = () => {
  const { defineId } = useParams();
  const [defineResult, setDefineResult] = useState<DefineResult | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    personaAPI
      .getPersona(defineId || '')
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
      <StyledInnerContainer>
        <StyledTitle>
          <div className="description">정의하기 테스트의 결과에요!</div>
          <div className="result">
            <div>{defineResult.comment.split(',')[0]}, </div>
            <div className="highlight">{defineResult.comment.split(',')[1]}</div>
          </div>
        </StyledTitle>
        <StyledContent>
          <CardSection result={defineResult} />
          <DescriptionSection result={defineResult} />
        </StyledContent>
        <StyledPlainButton
          variant="primary2"
          onClick={() => {
            navigate('/test/define/1');
          }}
        >
          다시 테스트 하기
        </StyledPlainButton>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledLoading = styled.div`
  height: 100vh;
  padding-top: 90px;
  padding-left: 20px;
`;

const StyledContainer = styled.section`
  min-height: 100vh;
  padding: 116px 64px 40px 64px;

  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.white} 0%, ${theme.color.primary100} 100%)`};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px;
    padding-top: 100px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 24px;
    padding-top: 100px;
  }
`;

const StyledInnerContainer = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  text-align: center;
  margin-bottom: 56px;

  .description {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray600};
    margin-bottom: 10px;
  }

  .result {
    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray700};

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }

    @media ${({ theme }) => theme.device.desktop} {
      display: flex;
      gap: 7px;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 28px;
    .description {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .result {
      ${({ theme }) => theme.font.mobile.title1};
      display: flex;
      flex-direction: column;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 28px;
    .description {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .result {
      ${({ theme }) => theme.font.mobile.title1};
      display: flex;
      flex-direction: column;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;

  width: 100%;
  height: auto;
`;

const StyledPlainButton = styled(PlainButton)`
  width: 376px;
  height: 48px;
  margin-top: 36px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 28px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: 28px;
  }
`;
