import styled from 'styled-components';

import ProgressBar from '@/components/common/ProgressBar';

interface TestSectionTitleProps {
  steps: string[];
  currentStep: string;
}

export const TestSectionTitle = ({ steps, currentStep }: TestSectionTitleProps) => {
  return (
    <StyledTitleContainer>
      <StyledProgressBar>
        <div className="title">
          <span>{steps.indexOf(currentStep)}</span> / {steps.length - 1}
        </div>
        <ProgressBar $currentStep={steps.indexOf(currentStep)} $totalSteps={steps.length - 1} />
      </StyledProgressBar>
      <StyledTitle>
        <div className="title">나에게 해당되는 키워드는 무엇인가요?</div>
        <div className="subtitle">
          <span className="highlight">5개</span>의 키워드를 선택해주세요.
        </div>
      </StyledTitle>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

const StyledProgressBar = styled.div`
  .title {
    text-align: center;
    margin-bottom: 8px;

    ${({ theme }) => theme.font.desktop.body1b};
    @media ${({ theme }) => theme.device.tablet && theme.device.mobile} {
      ${({ theme }) => theme.font.mobile.body1b};
    }
    color: ${({ theme }) => `${theme.color.gray500}`};

    span {
      color: ${({ theme }) => `${theme.color.primary500}`};
    }
  }
`;

const StyledTitle = styled.div`
  .title {
    text-align: center;
    margin-bottom: 4px;
    color: ${({ theme }) => `${theme.color.gray900}`};
    ${({ theme }) => theme.font.desktop.body1b};

    @media ${({ theme }) => theme.device.tablet} {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    @media ${({ theme }) => theme.device.mobile} {
      ${({ theme }) => theme.font.mobile.body1b};
    }
  }

  .subtitle {
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
  }
`;
