import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundImage from '@/assets/backgrounds/onboardingBackground.png';
import { ProfileSetup } from '@/components/OnboardingPage/ProfileSetup';
import { useFunnel } from '@/hooks/useFunnel';
import { userService } from '@/services/UserService';

const STEPS = [
  { step: '기본 정보 등록', description: '셀피스에서 진단을 통해,\n내가 어떤 사람인지 파악해요!' },
  {
    step: '브랜딩 정보 등록',
    description: '셀피스에서 파악한 나에게 적합한\n경험을 추천받고 나를 알아가요',
  },
];

export const OnboardingPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(STEPS[0].step);
  const user = userService.getUserState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== 'PRE_MEMBER') {
      // TODO: /home -> / 로 변경해야함.
      navigate('/home');
    }
  }, [user]);

  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
  };

  return (
    <StyledContainer>
      <StyledStepSection>
        <StyledInformation>
          <div className="step">{`${STEPS.findIndex((item) => item.step === currentStep) + 1} / ${STEPS.length}`}</div>
          <div className="description">
            {STEPS.find((item) => item.step === currentStep)?.description}
          </div>
        </StyledInformation>
      </StyledStepSection>
      <StyledInputSection>
        <ProfileSetup
          steps={STEPS.map((item) => item.step)}
          nextClickHandler={nextClickHandler}
          Funnel={Funnel}
          Step={Step}
        />
      </StyledInputSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-height: var(--full-height);
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
`;

const StyledStepSection = styled.section`
  padding: 108px 64px 0px 64px;
  flex: 1;
`;

const StyledInformation = styled.div`
  .step {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.primary500};
    margin-bottom: 8px;
  }

  .description {
    width: max-content;
    white-space: pre-wrap;

    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray900};
  }
`;

const StyledInputSection = styled.section`
  flex-shrink: 0;

  width: 547px;
  min-height: max-content;
  padding: 108px 32px 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;
