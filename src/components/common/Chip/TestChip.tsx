import styled from 'styled-components';

interface StyledDivProps {
  state: number;
}

interface TestChipProps {
  chipText: string;
  state: number;
  onToggle: () => void;
}

const StyledContainer = styled.div<StyledDivProps>`
  padding: 7px 16px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  background: ${(props) =>
    props.state === 1 ? props.theme.color.white : props.theme.color.primary500};
  color: ${(props) => (props.state === 1 ? props.theme.color.primary500 : props.theme.color.white)};
  &:hover {
    background: ${(props) =>
      props.state === 1 ? props.theme.color.white : props.theme.color.primary600};
    color: ${(props) =>
      props.state === 1 ? props.theme.color.primary700 : props.theme.color.primary50};
  }
`;

const InnerContainer = styled.div`
  text-align: center;

  ${({ theme }) => theme.font.desktop.label1m};
`;

const TestChip = ({ chipText, state, onToggle }: TestChipProps) => {
  return (
    <StyledContainer state={state} onClick={onToggle}>
      <InnerContainer>{chipText}</InnerContainer>
      {state === 2}
    </StyledContainer>
  );
};

export default TestChip;
