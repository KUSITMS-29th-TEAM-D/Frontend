import { SetupBasicInfo } from '@/components/OnboardingPage/SetupBasicInfo';
import { SetupBranding } from '@/components/OnboardingPage/SetupBranding';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';

export interface ProfileSetupProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

export const ProfileSetup = ({ steps, nextClickHandler, Funnel, Step }: ProfileSetupProps) => {
  return (
    <Funnel>
      <Step name="기본 정보 등록">
        <SetupBasicInfo onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name="브랜딩 정보 등록">
        <SetupBranding />
      </Step>
    </Funnel>
  );
};
