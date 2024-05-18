import { styled } from 'styled-components';

interface PlatformProps {
  state: number;
}

interface PlatformChipProps {
  chipIcon: React.ReactNode;
  state: number;
  index: number;
  onToggle: (index: number) => void;
  text: string;
}

export const PlatformChip = ({ chipIcon, state, index, onToggle, text }: PlatformChipProps) => {
  return (
    <StyledContainer state={state} onClick={() => onToggle(index)}>
      <ImageContainer>
        <IconContainer>{chipIcon}</IconContainer>
      </ImageContainer>
      <TextContainer state={state}>{text}</TextContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<PlatformProps>`
  width: 104px;
  height: 137px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: inline-flex;
  cursor: pointer;

  border: 2px solid
    ${(props) => (props.state === 1 ? props.theme.color.gray200 : props.theme.color.primary600)};
  background-color: ${(props) =>
    props.state === 1 ? props.theme.color.white : props.theme.color.primary500};
  color: ${(props) => (props.state === 1 ? props.theme.color.gray400 : props.theme.color.white)};

  &:hover {
    border: 2px solid
      ${(props) =>
        props.state === 1 ? props.theme.color.primary200 : props.theme.color.primary600};
    background: ${(props) =>
      props.state === 1 ? props.theme.color.primary50 : props.theme.color.primary500};
    color: ${(props) =>
      props.state === 1 ? props.theme.color.primary700 : props.theme.color.primary50};
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

const TextContainer = styled.div<PlatformProps>`
  text-align: center;
  ${({ theme }) => theme.font.desktop.label1m};
  word-wrap: break-word;
`;
