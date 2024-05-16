import styled from 'styled-components';

import ProgressBar from '@/components/common/ProgressBar';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const KeywordTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.body1b};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1b};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
`;

const KeywordDescription = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray600}`};
  ${({ theme }) => theme.font.desktop.body2m};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body2m};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body2m};
  }

  .highlight {
    color: ${({ theme }) => `${theme.color.primary500}`};
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const ProgressText = styled.div`
  ${({ theme }) => theme.font.desktop.body1b};
  @media ${({ theme }) => theme.device.tablet && theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  word-wrap: break-word;
`;

const ProgressNumber1 = styled(ProgressText)`
  color: ${({ theme }) => `${theme.color.primary500}`};
`;
const ProgressNumber2 = styled(ProgressText)`
  color: ${({ theme }) => `${theme.color.gray500}`};
`;

export const DefineTextView1 = () => {
  const currentStep = 1;
  const totalSteps = 3;

  return (
    <>
      <TextContainer>
        <InnerContainer>
          <ProgressWrapper>
            <ProgressNumber1>{currentStep} </ProgressNumber1>
            <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
          </ProgressWrapper>
          <ProgressBar $currentStep={currentStep} $totalSteps={totalSteps} />
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">5개</span>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DefineTextView2 = () => {
  const currentStep = 2;
  const totalSteps = 3;

  return (
    <>
      <TextContainer>
        <InnerContainer>
          <ProgressWrapper>
            <ProgressNumber1>{currentStep} </ProgressNumber1>
            <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
          </ProgressWrapper>
          <ProgressBar $currentStep={currentStep} $totalSteps={totalSteps} />
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">5개</span>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DefineTextView3 = () => {
  const currentStep = 3;
  const totalSteps = 3;

  return (
    <>
      <TextContainer>
        <InnerContainer>
          <ProgressWrapper>
            <ProgressNumber1>{currentStep} </ProgressNumber1>
            <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
          </ProgressWrapper>
          <ProgressBar $currentStep={currentStep} $totalSteps={totalSteps} />
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">5개</span>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};
