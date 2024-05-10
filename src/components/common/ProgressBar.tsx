import styled from 'styled-components';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressLongBar = styled.div`
  width: 100%;
  height: 9px;
  background-color: ${(props) => props.theme.color.gray50};
  border-radius: 12px;

  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div<ProgressBarProps>`
  width: ${(props) => (props.currentStep / props.totalSteps) * 100}%;
  height: 9px;
  padding: 0;
  background-color: ${(props) => props.theme.color.primary500};
`;

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <ProgressLongBar>
      <Progress currentStep={currentStep} totalSteps={totalSteps} />
    </ProgressLongBar>
  );
};

export default ProgressBar;
