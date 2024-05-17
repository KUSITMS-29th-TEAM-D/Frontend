import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { CardSection } from '@/components/DefineResultPage/CardSection';
import { DescriptionSection } from '@/components/DefineResultPage/DescriptionSection';
import { defineState } from '@/recoil/defineState';

export const DefineResultPage = () => {
  const defineResult = useRecoilValue(defineState);

  if (!defineResult) return <Navigate to="/" replace />;

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledTitle>
          <div className="description">정의하기 테스트의 결과에요!</div>
          <div className="result">
            <span>{defineResult.comment.split(',')[0]}, </span>
            <span className="highlight">{defineResult.comment.split(',')[1]}</span>
          </div>
        </StyledTitle>
        <StyledContent>
          <CardSection piece={defineResult.comment.split(/\(|\)/)[1]} />
          <DescriptionSection result={defineResult} />
        </StyledContent>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

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
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const StyledTitle = styled.div`
  text-align: center;

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
  }

  @media ${({ theme }) => theme.device.tablet} {
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
  gap: 36px;
  height: 458px;
  width: fit-content;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
