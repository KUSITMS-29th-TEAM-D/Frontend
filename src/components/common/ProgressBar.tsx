import styled from 'styled-components';

interface ProgressProp {
  width: number;
}

const ProgressLongBar = styled.div`
  width: 100%;
  height: 9px;
  background-color: ${(props) => props.theme.color.gray50};
  border-radius: 12px;

  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div<ProgressProp>`
  width: ${(props) => props.width}%;
  height: 9px;
  padding: 0;
  background-color: ${(props) => props.theme.color.primary500};
`;

const ProgressBar = () => {
  const maxLength = 5;
  const availableLength = 4;

  return (
    <ProgressLongBar>
      <Progress width={(availableLength * 100) / maxLength} />
    </ProgressLongBar>
  );
};

export default ProgressBar;
