import styled from 'styled-components';

import ProgressBar from '../common/ProgressBar';

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: inline-flex;
`;
const InnerContainer = styled.div`
  align-self: stretch;
  height: 82px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: flex;
`;
const KeywordContainer = styled.div`
  align-self: stretch;
  height: 45px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const KeywordTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;

const KeywordDescription = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray600}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;
`;

const KeywordCount = styled.span`
  color: ${({ theme }) => `${theme.color.primary500}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;
`;

const ProgressWrapper = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
`;
const ProgressText = styled.div`
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;

const ProgressNumber1 = styled(ProgressText)`
  color: ${({ theme }) => `${theme.color.primary500}`};
`;
const ProgressNumber2 = styled(ProgressText)`
  color: ${({ theme }) => `${theme.color.gray500}`};
`;

const ProgressBarWrapper = styled.div`
  align-self: stretch;
  position: relative;
`;
const ProgressContainer = styled.div`
  align-self: stretch;
  height: 45px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;

export const DefineTextView1 = () => {
  const currentStep = 1;
  const totalSteps = 3;

  return (
    <>
      <TextContainer>
        <InnerContainer>
          <ProgressContainer>
            <ProgressWrapper>
              <ProgressNumber1>{currentStep} </ProgressNumber1>
              <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
            </ProgressWrapper>
            <ProgressBarWrapper>
              <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            </ProgressBarWrapper>
          </ProgressContainer>
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <KeywordCount>5개</KeywordCount>의 키워드를 선택해주세요.
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
          <ProgressContainer>
            <ProgressWrapper>
              <ProgressNumber1>{currentStep} </ProgressNumber1>
              <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
            </ProgressWrapper>
            <ProgressBarWrapper>
              <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            </ProgressBarWrapper>
          </ProgressContainer>
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <KeywordCount>5개</KeywordCount>의 키워드를 선택해주세요.
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
          <ProgressContainer>
            <ProgressWrapper>
              <ProgressNumber1>{currentStep} </ProgressNumber1>
              <ProgressNumber2>/ {totalSteps}</ProgressNumber2>
            </ProgressWrapper>
            <ProgressBarWrapper>
              <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            </ProgressBarWrapper>
          </ProgressContainer>
        </InnerContainer>
        <KeywordContainer>
          <KeywordTitle>나에게 해당되는 키워드는 무엇인가요?</KeywordTitle>
          <KeywordDescription>
            <KeywordCount>5개</KeywordCount>의 키워드를 선택해주세요.
          </KeywordDescription>
        </KeywordContainer>
      </TextContainer>
    </>
  );
};
