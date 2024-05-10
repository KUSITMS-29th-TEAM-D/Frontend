import { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '@/assets/icons/closeWhite.svg';
interface StyledDivProps {
  state: number;
}

interface TestChipProps {
  chipText: string;
}
const IconContainer = styled.div`
  width: 16px;
  height: 16;
  align-items: center;
  display: flex;
  z-index: 1;
`;

const IconInnerContainer = styled.div`
  height: 9.8px;
  align-items: center;
  position: relative;
  display: flex;
`;

const StyledContainer = styled.div<StyledDivProps>`
  height: 100%;
  padding: 7px 16px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;

  align-items: center;
  gap: 8px;
  cursor: pointer;

  background: ${(props) =>
    props.state === 1 ? props.theme.color.white : props.theme.color.primary500};
  color: ${(props) => (props.state === 1 ? props.theme.color.primary500 : props.theme.color.white)};
`;

const InnerContainer = styled.div`
  text-align: center;

  ${({ theme }) => theme.font.desktop.label1m};
`;

const TestChip = ({ chipText }: TestChipProps) => {
  const [state, setState] = useState<number>(1);

  const handleStateChange = () => {
    setState(state === 1 ? 2 : 1);
  };

  return (
    <StyledContainer state={state} onClick={handleStateChange}>
      <InnerContainer>{chipText}</InnerContainer>
      {state === 2 && (
        <IconContainer>
          <IconInnerContainer>
            <CloseIcon />
          </IconInnerContainer>
        </IconContainer>
      )}
    </StyledContainer>
  );
};

export default TestChip;
