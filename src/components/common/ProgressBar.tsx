import styled from 'styled-components';

interface ProgressBarProps {
  $currentStep: number;
  $totalSteps: number;
}

const ProgressLongBar = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.gray50};
  border-radius: 12px;
`;

const Progress = styled.div<ProgressBarProps>`
  width: ${(props) => (props.$currentStep / props.$totalSteps) * 100}%;
  height: 9px;
  padding: 0;
  background-color: ${(props) => props.theme.color.primary500};
  border-radius: 12px;
`;

const ProgressBar = ({ $currentStep, $totalSteps }: ProgressBarProps) => {
  return (
    <ProgressLongBar>
      <Progress $currentStep={$currentStep} $totalSteps={$totalSteps} />
    </ProgressLongBar>
  );
};

export default ProgressBar;
