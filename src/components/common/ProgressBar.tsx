import styled from 'styled-components';

interface ProgressBarProps {
  $currentstep: number;
  $totalsteps: number;
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
  width: ${(props) => (props.$currentstep / props.$totalsteps) * 100}%;
  height: 9px;
  padding: 0;
  background-color: ${(props) => props.theme.color.primary500};
`;

const ProgressBar = ({ $currentstep, $totalsteps }: ProgressBarProps) => {
  return (
    <ProgressLongBar>
      <Progress $currentstep={$currentstep} $totalsteps={$totalsteps} />
    </ProgressLongBar>
  );
};

export default ProgressBar;
