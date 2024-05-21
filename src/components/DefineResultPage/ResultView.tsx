import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CardSection } from '@/components/DefineResultPage/CardSection';
import { DescriptionSection } from '@/components/DefineResultPage/DescriptionSection';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefineResult } from '@/types/test.type';

interface ResultViewProps {
  result: DefineResult;
}

export const ResultView = ({ result }: ResultViewProps) => {
  const navigate = useNavigate();

  return (
    <StyledInnerContainer>
      <StyledTitle>
        <div className="description">정의하기 테스트의 결과에요!</div>
        <div className="result">
          <div>{result.comment.split(',')[0]}, </div>
          <div className="highlight">{result.comment.split(',')[1]}</div>
        </div>
      </StyledTitle>
      <StyledContent>
        <CardSection result={result} />
        <DescriptionSection result={result} />
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
  );
};

const StyledInnerContainer = styled.div`
  padding-top: 40px;
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
