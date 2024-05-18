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
  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  @media ${({ theme }) => theme.device.mobile} {
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

export const DesignTextView1 = () => {
  const currentStep = 1;
  const totalSteps = 5;

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
          <KeywordTitle>내가 활동하고 싶은 분야는 어디인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">최대 3개</span>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DesignTextView2 = () => {
  const currentStep = 2;
  const totalSteps = 5;

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
          <KeywordTitle>사람들에게 알리고 싶은 당신의 가장 큰 특징은 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">최대 3개</span>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DesignTextView3 = () => {
  const currentStep = 3;
  const totalSteps = 5;

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
          <KeywordTitle>내가 생각하는 나의 능력은 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">최대 5개</span>의 키워드를 선택하거나 입력해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DesignTextView4 = () => {
  const currentStep = 4;
  const totalSteps = 5;

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
          <KeywordTitle>어떤 경로로 나를 알리고 싶나요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">최대 2개</span>의 플랫폼을 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};

export const DesignTextView5 = () => {
  const currentStep = 5;
  const totalSteps = 5;

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
          <KeywordTitle>나를 어떤 커리어로 정의하고 싶나요?</KeywordTitle>
          <KeywordDescription>
            <span className="highlight">1개</span>의 키워드를 선택하거나 입력해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};
